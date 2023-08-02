import CardArtikel from '@/components/CardArtikel'
import React from 'react'

function Article() {
  return (
    <div>
      <h4 className="text-2xl font-bold">Artikel Terkait</h4>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-1">
        {[1, 2, 3].map((item) => (
          <CardArtikel key={item} />
        ))}
      </div>
    </div>
  )
}

export default Article