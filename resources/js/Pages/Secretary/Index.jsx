import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import FastRegisterForm from './Partials/FastRegisterForm';

export default function Index() {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    داشبورد منشی
                </h2>
            }
        >
            <Head title="داشبورد منشی" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <FastRegisterForm />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
