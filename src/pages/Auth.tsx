import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="border-b border-neutral-200 px-20 py-6 max-md:px-5">
        <nav className="flex items-center justify-between max-w-[1050px] mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="text-neutral-800 text-xl font-normal leading-[1.2] tracking-[0.5px]"
          >
            YouAllSum
          </button>
        </nav>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-[450px]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold tracking-[-1.6px] text-neutral-800 mb-3">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-lg text-[#5d5d5d]">
              {isSignUp
                ? 'Start streaming with AI-powered tools'
                : 'Sign in to continue to YouAllSum'}
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-[30px] p-8">
            <form className="space-y-5">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-neutral-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-800 text-neutral-800"
                    placeholder="Enter your name"
                  />
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-800 text-neutral-800"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-[100px] focus:outline-none focus:ring-2 focus:ring-neutral-800 text-neutral-800"
                  placeholder="Enter your password"
                />
              </div>

              {!isSignUp && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-sm text-[#5d5d5d] hover:text-neutral-800"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button variant="dark" size="md" className="w-full">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-[#5d5d5d]"
              >
                {isSignUp ? (
                  <>
                    Already have an account?{' '}
                    <span className="text-neutral-800 font-medium">Sign In</span>
                  </>
                ) : (
                  <>
                    Don't have an account?{' '}
                    <span className="text-neutral-800 font-medium">Sign Up</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="flex items-center gap-3 text-[#5d5d5d] text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFCF89]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#9AD5F5]" />
                <span>Free plan available</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
