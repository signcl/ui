'use client'

/* eslint-disable @next/next/no-img-element */
import { usePokemonImage } from '@/components/blocks/complex-component/hooks/use-pokemon'

export function PokemonImage({ name, number }: { name: string; number: number }) {
  const imageUrl = usePokemonImage(number)

  if (!imageUrl) {
    return null
  }

  // biome-ignore lint/performance/noImgElement: demo only
  return <img src={imageUrl} alt={name} />
}
