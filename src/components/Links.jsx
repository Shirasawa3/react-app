import React from 'react'

const ITEMS = [
    { title: 'GitHub', href: 'http://github.com' },
    { title: 'Shirasawa3', href: 'https://github.com/shirasawa3' },
]

const Links = () => {
  return (
    <div>
      {ITEMS.map((item) => {
        return (
            <a key={item.href} href={item.href}>
                <h3>■{item.title}</h3>
            </a>
        );
      })}
    </div>
  );
}

export { Links }