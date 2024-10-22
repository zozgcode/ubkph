'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';
import Image from 'next/image';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  const date = new Date();
  const hour = date.getHours();

  return (
    <div className="">
      <Header />
      <div className="h-screen bg-[#F3F3F3] px-4">
        <div className="bg-transparent mx-auto shadow-sm rounded-lg py-7 px-5">

          <div className="mt-3">{error && <p className="text-base text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}</div>

          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <label htmlFor="Username" className="text-[#5c5c5c] text-lg">
                  Username
                </label>
                <input type="text" value={username} className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="text-[#5c5c5c] text-lg">
                  Password
                </label>
                <input type="password" value={password} className="p-4 rounded-[10px] text-[#5c5c5c] bg-transparent border border-gray-300 outline-none" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="flex flex-col w-full items-center justify-between gap-2 mt-3">
                <button type="submit" className="p-4 bg-[#F0612D] w-full text-white font-semibold rounded-md">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="pb-[30px]">
          <p className="text-center text-[#696969]">
            Union Bank of the Philippines is regulated by the Bangko Sentral ng Pilipinas. For inquiries and comments, please contact our <br />
            <span className="text-[#FF8000]">24-Hour Customer Service</span>. <br />A proud member of BancNet and PDIC.
          </p>
          <p className="text-center text-[#696969] mt-2">Deposits are insured by PDIC up to PHP 500,000 per depositor.</p>
        </div>
      </div>
    </div>
  );
}
