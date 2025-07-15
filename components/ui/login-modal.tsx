import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function LoginModal({
  open,
  onOpenChange,
}: {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button variant='outline'>Entrar</Button>
      </DialogTrigger>
      <DialogContent className='max-w-sm mx-auto'>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <form className='space-y-4'>
          <Input type='email' placeholder='Email' required />
          <Input type='password' placeholder='Senha' required />
          <Button type='submit' className='w-full'>
            Entrar
          </Button>
        </form>
        <DialogFooter className='flex flex-col gap-2 mt-2'>
          <a
            href='/register'
            className='text-xs text-muted-foreground hover:underline'
          >
            Não tem conta? Cadastre-se
          </a>
          <a
            href='/forgot-password'
            className='text-xs text-muted-foreground hover:underline'
          >
            Esqueceu a senha?
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
