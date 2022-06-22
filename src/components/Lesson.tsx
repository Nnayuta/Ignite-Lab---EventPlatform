import { CheckCircle, Lock } from 'phosphor-react';
import React from 'react';
import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string,
  slug: string,
  availableAt: Date
  type: 'live' | 'class';
}

export const Lesson: React.FC<LessonProps> = (props) => {

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMM' • 'k'h'mm", { locale: ptBR })

  return (
    <a href="">
      <span className='text-gray-300 '>
        {availableDateFormatted}
      </span>

      <div className='rounded border border-gray-500 p-4  mt-2'>
        <header className='flex items-center justify-between'>

          {isLessonAvailable ? (
            <span className='flex text-sm text-blue-500 font-medium items-center gap-2'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex text-sm text-orange-500 font-medium items-center gap-2'>
              <Lock size={20} />
              EM BREVE
            </span>
          )}

          <span className='text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold'>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className='text-gray-200 mt-5 block'>
          {props.title}
        </strong>
      </div>
    </a>
  )
}