import React from 'react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';

const Plans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Up to 3 sessions per month',
        'Basic AI summaries',
        'Live translation',
        'QR code access',
        'Community support'
      ]
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per month',
      features: [
        'Unlimited sessions',
        'Advanced AI summaries',
        'Live translation',
        'QR code access',
        'Smart chat moderation',
        'Priority support',
        'Analytics dashboard'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'Custom branding',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="border-b border-neutral-200 px-20 py-6 max-md:px-5">
        <nav className="flex items-center justify-between max-w-[1050px] mx-auto">
          <button 
            onClick={() => navigate('/')}
            className="text-neutral-800 text-xl font-normal leading-[1.2] tracking-[0.5px]"
          >
            YouAllSum
          </button>
          <Button
            variant="dark"
            size="md"
            onClick={() => navigate('/auth')}
          >
            Sign In
          </Button>
        </nav>
      </header>

      <main className="px-20 py-14 max-md:px-5">
        <div className="max-w-[1050px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-semibold tracking-[-1.92px] text-neutral-800 mb-4 max-md:text-[40px]">
              Choose Your Plan
            </h1>
            <p className="text-xl text-[#5d5d5d] leading-[34px]">
              Select the perfect plan for your streaming and presentation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-[30px] p-8 ${
                  plan.featured
                    ? 'border-neutral-800 bg-neutral-50'
                    : 'border-neutral-200'
                }`}
              >
                {plan.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-neutral-800 text-white px-4 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-neutral-800">
                    {plan.price}
                  </span>
                  <span className="text-[#5d5d5d] ml-2">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#5d5d5d]">
                      <span className="text-neutral-800 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? 'dark' : 'secondary'}
                  size="md"
                  className={`w-full ${!plan.featured ? 'border-neutral-800 text-neutral-800' : ''}`}
                  onClick={() => navigate('/auth')}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Plans;
