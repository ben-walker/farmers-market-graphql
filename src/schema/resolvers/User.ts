import { User } from "@generated/type-graphql";
import { argon2id, hash, verify } from "argon2";
import { IsEmail } from "class-validator";
import { Arg, Ctx, Field, InputType, Mutation, Resolver } from "type-graphql";

import { Context } from "../../context";

@InputType()
class SignUpInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  password!: string;
}

@InputType()
class LogInInput implements Partial<User> {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  password!: string;
}

@Resolver(() => User)
export class UserResolver {
  @Mutation(() => User)
  async signUp(
    @Arg("input") { email, password }: SignUpInput,
    @Ctx() { prisma, req }: Context
  ): Promise<User> {
    const passwordHash = await hash(password, { type: argon2id });
    const user = await prisma.user.create({
      data: { email, passwordHash },
    });
    req.session.user = user;
    return user;
  }

  @Mutation(() => User)
  async logIn(
    @Arg("input") { email, password }: LogInInput,
    @Ctx() { prisma, req }: Context
  ): Promise<User> {
    const errorMessage = "Incorrect email or password";
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new Error(errorMessage);
    }
    const isPasswordValid = await verify(user.passwordHash, password);
    if (!isPasswordValid) {
      throw new Error(errorMessage);
    }
    req.session.user = user;
    return user;
  }
}