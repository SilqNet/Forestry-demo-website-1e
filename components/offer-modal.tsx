'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { X, Upload, Trash2, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const formSchema = z.object({
  type: z.string().optional(),
  kadastraNumurs: z.string().length(11, 'Kadastra numurs sastāv no 11 cipariem').regex(/^\d+$/, 'Atļauti tikai cipari'),
  ipasumaNosaukums: z.string().optional(),
  pagasts: z.string().optional(),
  platiba: z.string().optional(),
  inventarizacija: z.string().optional(),
  lemums: z.string().optional(),
  vardsUzvards: z.string().min(1, 'Vārds, Uzvārds ir obligāts'),
  epasts: z.string().email('Nepareizs e-pasts'),
  talrunis: z.string().min(1, 'Tālrunis ir obligāts'),
  velamaCena: z.string().optional(),
  zina: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

interface OfferModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function OfferModal({ open, onOpenChange }: OfferModalProps) {
  const [selectedType, setSelectedType] = React.useState<string | null>(null)
  const [files, setFiles] = React.useState<File[]>([])
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
      kadastraNumurs: '',
      ipasumaNosaukums: '',
      pagasts: '',
      platiba: '',
      inventarizacija: '',
      lemums: '',
      vardsUzvards: '',
      epasts: '',
      talrunis: '',
      velamaCena: '',
      zina: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', { ...data, type: selectedType, files })
    // Here you would typically send the data to an API
    onOpenChange(false)
    reset()
    setSelectedType(null)
    setFiles([])
  }

  const handleTypeSelect = (type: string) => {
    if (selectedType === type) {
      setSelectedType(null)
      setValue('type', '')
    } else {
      setSelectedType(type)
      setValue('type', type)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      if (files.length + newFiles.length > 20) {
        alert('Maksimālais failu skaits ir 20')
        return
      }
      const validFiles = newFiles.filter(file => file.size <= 50 * 1024 * 1024)
      if (validFiles.length < newFiles.length) {
        alert('Daži faili pārsniedz 50MB ierobežojumu')
      }
      setFiles(prev => [...prev, ...validFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files)
      if (files.length + newFiles.length > 20) {
        alert('Maksimālais failu skaits ir 20')
        return
      }
      const validFiles = newFiles.filter(file => file.size <= 50 * 1024 * 1024)
      setFiles(prev => [...prev, ...validFiles])
    }
  }

  const types = [
    { id: 'meza-ipasumu', label: 'Meža īpašumu' },
    { id: 'augosus-kokus', label: 'Augošus kokus' },
    { id: 'cirsmu', label: 'Cirsmu' },
    { id: 'apaugums', label: 'Apaugums' },
  ]

  // Styles from existing website
  const sairaExpanded = { fontFamily: "'Saira Expanded', sans-serif" }
  const saira = { fontFamily: "'Saira', sans-serif" }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-[1200px] w-[95vw] p-0 overflow-hidden bg-white rounded-[20px] border-none shadow-2xl"
        onInteractOutside={(e) => e.preventDefault()}
        showCloseButton={false}
      >
        <button 
          onClick={() => onOpenChange(false)}
          className="absolute top-6 right-6 z-50 p-2 text-black/40 hover:text-black transition-colors bg-white/80 rounded-full shadow-sm hover:shadow-md"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col lg:flex-row h-full max-h-[90vh] overflow-y-auto">
          {/* Left Side: Form */}
          <div className="flex-1 p-8 lg:p-12">
            <DialogHeader className="mb-8">
              <DialogTitle 
                className="text-[28px] font-semibold text-black text-left leading-tight"
                style={{ ...sairaExpanded, textTransform: 'none' }}
              >
                Vēlos piedāvāt
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Type Selection */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-8">
                {types.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => handleTypeSelect(type.label)}
                    className="flex items-center gap-3 group outline-none"
                  >
                    <div className={cn(
                      "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                      selectedType === type.label 
                        ? "border-[#8BC34A] bg-[#8BC34A]" 
                        : "border-black/10 group-hover:border-black/20"
                    )}>
                      {selectedType === type.label && <CheckCircle2 size={16} className="text-white" />}
                    </div>
                    <span 
                      className="text-[14px] text-black/80 group-hover:text-black transition-colors"
                      style={saira}
                    >
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Info Header */}
              <div className="pt-4">
                <h3 
                  className="text-[18px] font-semibold text-black mb-6"
                  style={sairaExpanded}
                >
                  Sākotnējā informācija par īpašumu
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Kadastra numurs */}
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Kadastra numurs</Label>
                    <div className="relative">
                      <input
                        {...register('kadastraNumurs')}
                        className={cn(
                          "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                          errors.kadastraNumurs && "border-red-500"
                        )}
                        maxLength={11}
                      />
                      <p className="text-[11px] text-black/40 mt-1" style={saira}>
                        Kadastra numurs sastāv no 11 cipariem
                      </p>
                      {errors.kadastraNumurs && (
                        <p className="text-[11px] text-red-500 mt-0.5" style={saira}>{errors.kadastraNumurs.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Ipasuma nosaukums */}
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Īpašuma nosaukums</Label>
                    <input
                      {...register('ipasumaNosaukums')}
                      className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                    />
                  </div>

                  {/* Pagasts */}
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Pagasts</Label>
                    <input
                      {...register('pagasts')}
                      className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                    />
                  </div>

                  {/* Platiba */}
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Aptuvenā platība (ha)</Label>
                    <input
                      {...register('platiba')}
                      className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  {/* Inventarizacija */}
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Vai īpašumam ir derīga meža inventarizācija (taksācija)?</Label>
                    <input
                      {...register('inventarizacija')}
                      className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                    />
                  </div>

                  {/* Lemums */}
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Cik drīz plānojat pieņemt lēmumu par darījumu?</Label>
                    <input
                      {...register('lemums')}
                      className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Vārds, Uzvārds</Label>
                    <input
                      {...register('vardsUzvards')}
                      className={cn(
                        "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                        errors.vardsUzvards && "border-red-500"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Tālrunis</Label>
                    <input
                      {...register('talrunis')}
                      className={cn(
                        "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                        errors.talrunis && "border-red-500"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>E-pasts</Label>
                    <input
                      {...register('epasts')}
                      className={cn(
                        "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                        errors.epasts && "border-red-500"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[14px] text-black/60 font-normal" style={saira}>Vēlamā cena</Label>
                    <input
                      {...register('velamaCena')}
                      className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label className="text-[14px] text-black/60 font-normal" style={saira}>Ziņa</Label>
                <textarea
                  {...register('zina')}
                  className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px] min-h-[40px] resize-none overflow-hidden"
                  onInput={(e) => {
                    const target = e.target as HTMLTextAreaElement
                    target.style.height = 'auto'
                    target.style.height = `${target.scrollHeight}px`
                  }}
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  type="submit"
                  className="bg-[#8BC34A] hover:bg-[#7CB342] text-white px-12 py-6 rounded-full text-[16px] font-semibold transition-all hover:scale-105 active:scale-95"
                  style={sairaExpanded}
                >
                  Nosūtīt piedāvājumu
                </Button>
              </div>
            </form>
          </div>

          {/* Right Side: Document Upload */}
          <div className="w-full lg:w-[400px] bg-[#F5F5F5] p-8 lg:p-12 flex flex-col">
            <h3 
              className="text-[18px] font-semibold text-black mb-6"
              style={sairaExpanded}
            >
              Pievienot dokumentu
            </h3>

            <div 
              onDragOver={onDragOver}
              onDrop={onDrop}
              className="flex-1 flex flex-col"
            >
              <div 
                className="border-2 border-dashed border-black/10 rounded-[15px] p-8 text-center flex flex-col items-center justify-center gap-4 bg-white hover:border-[#8BC34A] transition-colors cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  multiple 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                <div className="text-[14px] text-black/60 group-hover:text-black transition-colors" style={saira}>
                  Ievelciet failus šeit vai
                </div>
                <Button 
                  type="button" 
                  variant="outline"
                  className="rounded-full border-black/10 px-8 bg-[#D9D9D9] border-none text-black hover:bg-[#CECECE]"
                >
                  Izvēlēties failus
                </Button>
              </div>
              <p className="text-[11px] text-black/40 mt-4 text-center" style={saira}>
                Max. faila lielums: 50 MB, Max. faili: 20
              </p>

              <div className="mt-8 flex-1 flex flex-col">
                <div className="bg-white/50 rounded-[15px] p-6 flex-1 min-h-[200px]">
                  <h4 className="text-[14px] font-semibold text-black mb-4" style={sairaExpanded}>
                    Pievienotie dokumenti:
                  </h4>
                  
                  {files.length === 0 ? (
                    <p className="text-[13px] text-black/40" style={saira}>
                      Neviens dokuments nav pievienots
                    </p>
                  ) : (
                    <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {files.map((file, index) => (
                        <li key={index} className="flex items-center justify-between gap-3 group bg-white p-3 rounded-lg shadow-sm">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <Upload size={16} className="text-[#8BC34A] shrink-0" />
                            <span className="text-[13px] text-black/80 truncate" title={file.name}>
                              {file.name}
                            </span>
                          </div>
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              removeFile(index)
                            }}
                            className="p-1.5 text-black/20 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
