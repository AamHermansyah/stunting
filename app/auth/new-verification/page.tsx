'use client'

import { newVerification } from '@/actions/new-verification';
import { FormError } from '@/components/FormError';
import { FormSuccess } from '@/components/FormSuccess';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { VscLoading } from 'react-icons/vsc'

function NewVerification() {
  const searctParams = useSearchParams();
  const token = searctParams.get('token');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useRouter();

  const onSubmit = useCallback(() => {
    if (success || error) return;

    setError('');
    setSuccess('');

    if (!token) {
      setError('Token tidak ditemukan!');
      return;
    };

    newVerification(token)
      .then((data) => {
        setError(data?.error || '');
        if (data?.success) {
          setSuccess(data?.success);
          setTimeout(() => {
            navigate.push('/auth/login');
          }, 3000);
        }
      })
      .catch(() => {
        setError('Sesuatu error telah terjadi!');
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="max-w-xl mx-auto min-h-[400px] flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-semibold text-gray-700 text-2xl text-primary">
          Verifikasi Email
        </h1>
        {!success && !error && (
          <>
            <p>Mohon tunggu sedang verifikasi...</p>
            <VscLoading fontSize={32} className="animate-spin mx-auto" />
          </>
        )}
        <div className="w-full flex justify-center">
          <FormSuccess message={success} />
          {!success && (
            <FormError message={error} />
          )}
        </div>
        <div>
          <Link href="/auth/login" className="text-sm text-primary underline">Kembali ke login</Link>
        </div>
      </div>
    </div>
  )
}

export default NewVerification