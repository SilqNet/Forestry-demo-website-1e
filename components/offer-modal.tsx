'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { X, Upload, Trash2, Check, ChevronDown } from 'lucide-react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
  DialogPortal,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { FlowHoverButton } from '@/components/ui/flow-hover-button'

const formSchema = z.object({
  type: z.string().optional(),
  kadastraNumurs: z.string().length(11, 'Kadastra numurs sastāv no 11 cipariem').regex(/^\d+$/, 'Atļauti tikai cipari'),
  ipasumaNosaukums: z.string().optional(),
  pagasts: z.string().optional(),
  platiba: z.string().optional(),
  inventarizacija: z.string().optional(),
  lemums: z.string().optional(),
  vardsUzvards: z.string().min(1, 'Vārds, Uzvārds ir obligāts'),
  epasts: z.string().email('Nepareizs e-pasts').min(1, 'E-pasts ir obligāts'),
  talrunis: z.string().min(1, 'Tālrunis ir obligāts'),
  velamaCena: z.string().optional(),
  zina: z.string().optional(),
  privacyConsent: z.boolean().refine(val => val === true, 'Jums ir jāpiekrīt privātuma politikai'),
})

type FormValues = z.infer<typeof formSchema>

interface OfferModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const CustomCheckbox = ({ 
  checked, 
  onChange, 
  label, 
  isBold = false,
  isHyperlink = false
}: { 
  checked: boolean, 
  onChange: () => void, 
  label: React.ReactNode,
  isBold?: boolean,
  isHyperlink?: boolean
}) => {
  const saira = { fontFamily: "'Saira', sans-serif" }
  return (
    <button
      type="button"
      onClick={onChange}
      className="flex items-center gap-3 group outline-none cursor-pointer text-left"
    >
      <div className={cn(
        "w-5 h-5 rounded-full border border-black/20 flex items-center justify-center transition-all shrink-0",
        checked 
          ? "border-gold bg-gold" 
          : "group-hover:border-gold/50"
      )}>
        {checked && <Check size={14} className="text-white" strokeWidth={3} />}
      </div>
      <span 
        className={cn(
          "text-[14px] transition-colors leading-tight",
          checked && isBold ? "text-black font-bold" : "text-black/60",
          !checked && "font-normal"
        )}
        style={saira}
      >
        {label}
      </span>
    </button>
  )
}

const CustomDropdown = ({ 
  label, 
  value, 
  options, 
  onChange, 
  placeholder 
}: { 
  label: string, 
  value: string, 
  options: string[], 
  onChange: (val: string) => void,
  placeholder?: string
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const saira = { fontFamily: "'Saira', sans-serif" }

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="space-y-1 relative" ref={dropdownRef}>
      <Label className="text-[14px] text-black font-medium" style={saira}>{label}</Label>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-black/10 py-2 flex items-center justify-between cursor-pointer group"
      >
        <span className={cn(
          "text-[14px] transition-colors",
          value ? "text-black" : "text-black/40"
        )} style={saira}>
          {value || placeholder || 'Izvēlēties...'}
        </span>
        <ChevronDown size={16} className={cn("text-black/40 transition-transform duration-300", isOpen && "rotate-180")} />
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 py-2 bg-white shadow-xl z-[60] border border-black/5 rounded-md animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              className="w-full text-left px-4 py-2.5 text-[14px] text-black hover:text-gold hover:bg-black/[0.02] transition-all border-l-2 border-transparent hover:border-gold whitespace-normal leading-snug"
              style={saira}
              onClick={() => {
                onChange(option)
                setIsOpen(false)
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
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
    watch,
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
      privacyConsent: false,
    },
  })

  React.useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [open])

  const inventarizacijaValue = watch('inventarizacija')
  const lemumsValue = watch('lemums')
  const privacyConsentValue = watch('privacyConsent')

  const onSubmit = (data: FormValues) => {
    console.log('Form data:', { ...data, type: selectedType, files })
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
  ]

  const sairaExpanded = { fontFamily: "'Saira Expanded', sans-serif" }
  const saira = { fontFamily: "'Saira', sans-serif" }

  const handleNumericInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Tab') {
      e.preventDefault()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-[2px]" />
        <DialogPrimitive.Content 
          className="fixed inset-0 z-[60] overflow-y-auto outline-none"
          onInteractOutside={(e) => e.preventDefault()}
        >
          <div className="min-h-full flex flex-col items-center py-12 lg:py-24 px-4">
            <div className="relative w-full max-w-[1000px] my-auto">
            {/* Close button outside the modal */}
            <DialogPrimitive.Close className="absolute -top-12 right-0 lg:-right-12 p-2 text-white hover:text-gold transition-colors outline-none cursor-pointer">
              <X size={36} strokeWidth={1.5} />
            </DialogPrimitive.Close>

            <div className="w-full bg-white rounded-[30px] border-none shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] w-full">
                {/* Left Side: Form */}
                <div className="p-8 lg:p-14">
                  <DialogHeader className="mb-8">
                    <DialogPrimitive.Title 
                      className="text-[24px] lg:text-[28px] font-semibold text-black text-left leading-tight"
                      style={{ ...sairaExpanded, textTransform: 'none' }}
                    >
                      Vēlos piedāvāt
                    </DialogPrimitive.Title>
                  </DialogHeader>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Type Selection */}
                    <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                      {types.map((type) => (
                        <CustomCheckbox
                          key={type.id}
                          checked={selectedType === type.label}
                          onChange={() => handleTypeSelect(type.label)}
                          label={type.label}
                          isBold={true}
                        />
                      ))}
                    </div>

                    <div className="space-y-10 pt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {/* Row 1: Kadastra numurs | Ipasuma nosaukums */}
                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>Kadastra numurs</Label>
                          <div className="relative">
                            <input
                              {...register('kadastraNumurs')}
                              onKeyDown={handleNumericInput}
                              className={cn(
                                "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                                errors.kadastraNumurs && "border-red-500"
                              )}
                              maxLength={11}
                            />
                            <p className="text-[11px] text-black/60 mt-1" style={saira}>Kadastra numurs sastāv no 11 cipariem</p>
                            {errors.kadastraNumurs && (
                              <p className="text-[11px] text-red-500 mt-0.5" style={saira}>{errors.kadastraNumurs.message}</p>
                            )}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>Īpašuma nosaukums</Label>
                          <input
                            {...register('ipasumaNosaukums')}
                            className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                          />
                        </div>

                        {/* Row 2: Pagasts | Aptuvena platiba */}
                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>Pagasts</Label>
                          <input
                            {...register('pagasts')}
                            className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                          />
                        </div>

                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>Aptuvenā īpašuma platība (ha)</Label>
                          <input
                            {...register('platiba')}
                            className="w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]"
                          />
                        </div>

                        {/* Row 3: Vards uzvards | Telefona numurs */}
                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>Vārds uzvārds</Label>
                          <input
                            {...register('vardsUzvards')}
                            className={cn(
                              "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                              errors.vardsUzvards && "border-red-500"
                            )}
                          />
                        </div>

                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>E-pasts</Label>
                          <input
                            {...register('epasts')}
                            className={cn(
                              "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                              errors.epasts && "border-red-500"
                            )}
                          />
                        </div>

                        <div className="space-y-1">
                          <Label className="text-[14px] text-black font-medium" style={saira}>Telefona numurs</Label>
                          <input
                            {...register('talrunis')}
                            className={cn(
                              "w-full bg-transparent border-b border-black/10 py-2 focus:border-black outline-none transition-colors text-[14px]",
                              errors.talrunis && "border-red-500"
                            )}
                          />
                        </div>
                      </div>

                      {/* Dropdowns */}
                      <div className="grid grid-cols-1 gap-y-10">
                        <CustomDropdown
                          label="Vai īpašumam ir derīga meža inventarizācija (taksācija)?"
                          value={inventarizacijaValue || ''}
                          options={['Jā', 'Nē', 'Neesmu pārliecināts(-a)']}
                          onChange={(val) => setValue('inventarizacija', val)}
                        />

                        <CustomDropdown
                          label="Cik drīz plānojat pieņemt lēmumu par darījumu?"
                          value={lemumsValue || ''}
                          options={[
                            'Iespējami ātri (1-2 nedēļu laikā)',
                            'Tuvāko mēnešu laikā',
                            'Šobrīd tikai pētu tirgu un vēlos uzzināt vērtību'
                          ]}
                          onChange={(val) => setValue('lemums', val)}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <Label className="text-[14px] text-black font-medium" style={saira}>Ziņa</Label>
                      <textarea
                        {...register('zina')}
                        className="w-full bg-transparent border-b border-black/10 pb-1 pt-2 focus:border-black outline-none transition-colors text-[14px] min-h-[32px] resize-none overflow-hidden leading-[1.6]"
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement
                          target.style.height = 'auto'
                          target.style.height = `${target.scrollHeight}px`
                        }}
                      />
                    </div>

                    {/* Privacy Consent */}
                    <div className="pt-4">
                      <CustomCheckbox
                        checked={privacyConsentValue || false}
                        onChange={() => setValue('privacyConsent', !privacyConsentValue)}
                        label={
                          <span>
                            Piekrītu manu datu apstrādei saskaņā ar <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-gold transition-colors inline-block">Privātuma Politiku</span>
                          </span>
                        }
                      />
                      {errors.privacyConsent && (
                        <p className="text-[11px] text-red-500 mt-1" style={saira}>{errors.privacyConsent.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8">
                      <FlowHoverButton asChild>
                        <Button 
                          type="submit"
                          variant="ghost"
                          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-14 py-8 text-[15px] font-medium text-black transition-all hover:text-white hover:border-gold hover:bg-transparent active:text-white active:border-gold active:bg-transparent uppercase tracking-widest shadow-none bg-white"
                          style={sairaExpanded}
                        >
                          NOSŪTĪT PIEDĀVĀJUMU
                        </Button>
                      </FlowHoverButton>
                    </div>
                  </form>
                </div>

                {/* Right Side: Document Upload */}
                <div className="w-full bg-white p-8 lg:p-14">
                  <h3 
                    className="text-[24px] lg:text-[28px] font-semibold text-black mb-8 leading-tight"
                    style={{ ...sairaExpanded, textTransform: 'none' }}
                  >
                    Pievienot dokumentu
                  </h3>

                  <div 
                    onDragOver={onDragOver}
                    onDrop={onDrop}
                    className="flex flex-col"
                  >
                    <div 
                      className="border border-dashed border-black/10 rounded-[20px] p-8 text-center flex flex-col items-center justify-center gap-6 bg-white transition-all cursor-pointer shadow-sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input 
                        type="file" 
                        multiple 
                        className="hidden" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                      <div className="text-[14px] text-black transition-colors" style={saira}>
                        Ievelciet failus šeit vai
                      </div>
                      <Button 
                        type="button" 
                        className="rounded-full bg-[#E0E0E0] hover:bg-[#D0D0D0] text-black px-10 h-12 border-none shadow-none text-[13px] font-medium"
                        style={saira}
                      >
                        Izvēlēties failus
                      </Button>
                    </div>
                    <p className="text-[11px] text-black mt-6 text-center" style={saira}>
                      Max. faila lielums: 50 MB, Max. faili: 20
                    </p>

                    <div className="mt-10">
                      <div 
                        className="bg-white rounded-[20px] flex flex-col border border-black/5 min-h-[90px] h-auto max-w-full min-w-0 overflow-hidden"
                        style={{ padding: '24px 30px' }}
                      >
                        <h4 className="text-[14px] font-semibold text-black mb-2" style={sairaExpanded}>
                          Pievienotie dokumenti:
                        </h4>
                        
                        {files.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-2">
                            <p className="text-[13px] text-black text-center" style={saira}>
                              Neviens dokuments nav pievienots
                            </p>
                          </div>
                        ) : (
                          <div className="max-w-full min-w-0 max-h-[140px] overflow-x-auto overflow-y-auto whitespace-nowrap">
                            <ul className="space-y-2 pb-1">
                              {files.map((file, index) => (
                                <li key={index} className="flex items-center gap-[12px] group bg-white p-3 rounded-xl shadow-sm border border-black/5 w-max min-w-full whitespace-nowrap">
                                  <div className="flex items-center gap-3 flex-shrink-0">
                                    <Upload size={14} className="text-gold shrink-0" />
                                    <span className="text-[13px] text-black/80 font-medium whitespace-nowrap flex-shrink-0" title={file.name}>
                                      {file.name}
                                    </span>
                                  </div>
                                  <button 
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      removeFile(index)
                                    }}
                                    className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-50 rounded-md transition-colors shrink-0 ml-auto"
                                  >
                                    <span>Dzēst</span>
                                    <Trash2 size={12} />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}
