import React from 'react'
import { SliderInput } from '@/components/SliderInput'

export function SliderFields() {
  const STEP = 3
  return (
    <>
      <SliderInput label="Poder" min={0} max={30} step={STEP} />
      <SliderInput label="Área de Atuação" min={-3} max={9} step={STEP} />
      <SliderInput label="Alcance" min={0} max={24} step={STEP} />
      <SliderInput label="Tempo de execução" min={-12} max={6} step={STEP} />
      <SliderInput label="Duração" min={0} max={15} step={STEP} />
      <SliderInput label="Restrições" min={-6} max={0} step={STEP} />
      <SliderInput label="Extras" min={-6} max={6} step={STEP} />
    </>
  )
}
