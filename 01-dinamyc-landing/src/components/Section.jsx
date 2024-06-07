import React from 'react'

export default function Section({title, children, ...props}) { {/*Recibe un objeto con las propiedades title, children y el resto de las propiedades que se le pasen, convertidas estas ultimas en un objeto. */}
  return (
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
  )
}
