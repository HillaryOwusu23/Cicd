'use client';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useActionState, useState } from 'react';
import { signUpAction } from '@/actions/signup.action';
export function SignUpForm({
  className,
  ...props
}: Readonly<React.ComponentPropsWithoutRef<'form'>>) {
  const [newState, formAction, pending] = useActionState(signUpAction, {});
  const [type, setType] = useState(true);
  const [passwordType, setPasswordType] = useState(true);

  return (
    <form
      action={formAction}
      className={cn('flex flex-col gap-6', className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your email below to sign up your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">UserName</Label>
          <Input
            id="username"
            name="username"
            type="username"
            placeholder="Ivy"
            required
          />
          {newState.username && newState.success === false && (
            <p className="text-sm text-red-500">{newState.username}</p>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
          {newState.email && newState.success === false && (
            <p className="text-sm text-red-500">{newState.email}</p>
          )}
        </div>

        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <div className=" justify-between flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
            <input
              id="password"
              name="password"
              className="outline-none w-[85%]"
              type={passwordType ? 'password' : 'text'}
              required
            />
            <button
              onClick={() => {
                setPasswordType((prev) => !prev);
              }}
              className="cursor-pointer w-[12%] h-full"
            >
              {passwordType ? 'hide' : 'show'}
            </button>
          </div>
          {newState.password && newState.success === false && (
            <p className="text-sm text-red-500">{newState.password}</p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Confirm Password</Label>
          </div>
          <div className=" justify-between flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
            <input
              id="password"
              name="confirmPassword"
              className="outline-none w-[85%]"
              type={type ? 'password' : 'text'}
              required
            />
            <button
              onClick={() => {
                setType((prev) => !prev);
              }}
              className="cursor-pointer w-[12%] h-full"
            >
              {type ? 'hide' : 'show'}
            </button>
          </div>
          {newState.confirmPassword && newState.success === false && (
            <p className="text-sm text-red-500">{newState.confirmPassword}</p>
          )}
        </div>
        <Button type="submit" disabled={pending} className="w-full">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
