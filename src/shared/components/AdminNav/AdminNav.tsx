import React from 'react'

const AdminNav = () => {
  return (
    <div className='w-full flex justify-around font-semibold text-2xl'>
        <a href='/admin/products'>Productos</a>
        <a href='/admin/banners'>Banners</a>
        <a href='/admin/categories'>Categorias</a>
    </div>
  )
}

export default AdminNav