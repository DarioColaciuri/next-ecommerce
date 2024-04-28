"use client"
import React from 'react'
import { db } from '@/app/firebase/config';
import { useAuthContext } from '@/app/components/context/AuthContext';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

const Page = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersSnapshot = await getDocs(collection(db, 'orders'));
                const ordersData = ordersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Incluimos el ID del documento en los datos
                setOrders(ordersData);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const filteredOrders = orders.filter(order => order.cliente.email === user.email);

    return (
        <div className='container flex justify-center'>
            <div className='w-1/2 mt-5'>
                {filteredOrders.length > 0 ? (
                    <ul className='flex flex-col gap-6'>
                        {filteredOrders.map((order, index) => (
                            <li className='flex flex-col gap-4 text-white bg-gray-800 text-center ' key={index}>
                                <h3 className='bg-gray-600'>Orden #{index + 1}</h3>
                                <h4 className='text-xl bg-gray-400 rounded-xl w-1/2 m-auto'>{order.id}</h4>
                                <ul>
                                    {order.productos.map((product, productIndex) => (
                                        <li key={productIndex}>
                                            <strong>{product.title}</strong> - Cantidad: {product.quantity}
                                        </li>
                                    ))}
                                </ul>
                                <h2 className='text-2xl bg-gray-700'>Total: ${order.total}</h2>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No se encontraron órdenes para este usuario.</p>
                )}
            </div>
        </div>
    );
};

export default Page;