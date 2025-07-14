import { useState } from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Search } from 'lucide-react'

export default function SearchModal() {
  const [showGarage, setShowGarage] = useState(false)
  const [showPetFriendly, setShowPetFriendly] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='cursor-pointer hover:bg-white/30 rounded-full transition-colors duration-200 p-2'>
          <Search size={20} />
        </button>
      </DialogTrigger>

      <DialogContent className='sm:max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Buscar Imóvel</DialogTitle>
        </DialogHeader>

        <div className='grid gap-4 py-4'>
          <Input placeholder='Digite o nome do bairro ou palavra-chave...' />

          <div className='grid grid-cols-2 gap-2'>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Tipo' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='casa'>Casa</SelectItem>
                <SelectItem value='apartamento'>Apartamento</SelectItem>
                <SelectItem value='terreno'>Terreno</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Quartos' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='1'>1+</SelectItem>
                <SelectItem value='2'>2+</SelectItem>
                <SelectItem value='3'>3+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='flex items-center gap-2'>
            <Toggle pressed={showGarage} onPressedChange={setShowGarage}>
              Garagem
            </Toggle>
            <Toggle
              pressed={showPetFriendly}
              onPressedChange={setShowPetFriendly}
            >
              Pet Friendly
            </Toggle>
          </div>

          <div className='flex justify-end gap-2'>
            <Button variant='outline'>Limpar</Button>
            <Button>Buscar</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
