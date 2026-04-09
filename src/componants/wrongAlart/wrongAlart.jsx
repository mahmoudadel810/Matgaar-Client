import React from 'react'

export default function wrongAlart(ERRO) {
  return (
    <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
        <strong className="font-bold">{ERRO}</strong>
</div>
  )
}
