'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useTheme } from 'next-themes'

export default function Linguica() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: 'Smart Automation',
      description:
        'Automate repetitive tasks and workflows to save time and reduce errors.',
      icon: <Zap className='size-5' />,
    },
    {
      title: 'Advanced Analytics',
      description:
        'Gain valuable insights with real-time data visualization and reporting.',
      icon: <BarChart className='size-5' />,
    },
    {
      title: 'Team Collaboration',
      description:
        'Work together seamlessly with integrated communication tools.',
      icon: <Users className='size-5' />,
    },
    {
      title: 'Enterprise Security',
      description:
        'Keep your data safe with end-to-end encryption and compliance features.',
      icon: <Shield className='size-5' />,
    },
    {
      title: 'Seamless Integration',
      description:
        'Connect with your favorite tools through our extensive API ecosystem.',
      icon: <Layers className='size-5' />,
    },
    {
      title: '24/7 Support',
      description:
        'Get help whenever you need it with our dedicated support team.',
      icon: <Star className='size-5' />,
    },
  ]

  return (
    <main className='flex flex-col items-center justify-center flex-1 w-full'>
      {/* Features Section */}
      <section id='features' className='w-full py-20 md:py-32'>
        <div className='px-4 md:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
          >
            <Badge
              className='rounded-full px-4 py-1.5 text-sm font-medium'
              variant='secondary'
            >
              Features
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Everything You Need to Succeed
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-lg'>
              Our comprehensive platform provides all the tools you need to
              streamline your workflow, boost productivity, and achieve your
              goals.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <Card className='h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md'>
                  <CardContent className='p-6 flex flex-col h-full'>
                    <div className='size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4'>
                      {feature.icon}
                    </div>
                    <h3 className='text-xl font-bold mb-2'>{feature.title}</h3>
                    <p className='text-muted-foreground'>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='w-full py-20 md:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 -z-10 h-full w-full'></div>

        <div className='px-4 md:px-6 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center space-y-4 text-center mb-16'
          >
            <Badge
              className='rounded-full px-4 py-1.5 text-sm font-medium'
              variant='secondary'
            >
              How It Works
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Simple Process, Powerful Results
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-lg'>
              Get started in minutes and see the difference our platform can
              make for your business.
            </p>
          </motion.div>

          <div className='grid md:grid-cols-3 gap-8 md:gap-12 relative'>
            {[
              {
                step: '01',
                title: 'Create Account',
                description:
                  'Sign up in seconds with just your email. No credit card required to get started.',
              },
              {
                step: '02',
                title: 'Configure Workspace',
                description:
                  "Customize your workspace to match your team's unique workflow and requirements.",
              },
              {
                step: '03',
                title: 'Boost Productivity',
                description:
                  'Start using our powerful features to streamline processes and achieve your goals.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className='relative z-10 flex flex-col items-center text-center space-y-4'
              >
                <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-xl font-bold shadow-lg'>
                  {step.step}
                </div>
                <h3 className='text-xl font-bold'>{step.title}</h3>
                <p className='text-muted-foreground'>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id='pricing'
        className='w-full py-20 md:py-32 relative overflow-hidden'
      >
        <div className='absolute inset-0 -z-10 h-full w-full'></div>

        <div className='px-4 md:px-6 relative'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
          >
            <Badge
              className='rounded-full px-4 py-1.5 text-sm font-medium'
              variant='secondary'
            >
              Pricing
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Simple, Transparent Pricing
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-lg'>
              Choose the plan that&apos;s right for your business. All plans
              include a 14-day free trial.
            </p>
          </motion.div>

          <div className='mx-auto max-w-5xl'>
            <Tabs defaultValue='monthly' className='w-full'>
              <div className='flex justify-center mb-8'>
                <TabsList className='rounded-full p-1'>
                  <TabsTrigger value='monthly' className='rounded-full px-6'>
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value='annually' className='rounded-full px-6'>
                    Annually (Save 20%)
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value='monthly'>
                <div className='grid gap-6 lg:grid-cols-3 lg:gap-8'>
                  {[
                    {
                      name: 'Starter',
                      price: '$29',
                      description: 'Perfect for small teams and startups.',
                      features: [
                        'Up to 5 team members',
                        'Basic analytics',
                        '5GB storage',
                        'Email support',
                      ],
                      cta: 'Start Free Trial',
                    },
                    {
                      name: 'Professional',
                      price: '$79',
                      description: 'Ideal for growing businesses.',
                      features: [
                        'Up to 20 team members',
                        'Advanced analytics',
                        '25GB storage',
                        'Priority email support',
                        'API access',
                      ],
                      cta: 'Start Free Trial',
                      popular: true,
                    },
                    {
                      name: 'Enterprise',
                      price: '$199',
                      description:
                        'For large organizations with complex needs.',
                      features: [
                        'Unlimited team members',
                        'Custom analytics',
                        'Unlimited storage',
                        '24/7 phone & email support',
                        'Advanced API access',
                        'Custom integrations',
                      ],
                      cta: 'Contact Sales',
                    },
                  ].map((plan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card
                        className={`relative overflow-hidden h-full ${
                          plan.popular
                            ? 'border-primary shadow-lg'
                            : 'border-border/40 shadow-md'
                        } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                      >
                        {plan.popular && (
                          <div className='absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg'>
                            Most Popular
                          </div>
                        )}
                        <CardContent className='p-6 flex flex-col h-full'>
                          <h3 className='text-2xl font-bold'>{plan.name}</h3>
                          <div className='flex items-baseline mt-4'>
                            <span className='text-4xl font-bold'>
                              {plan.price}
                            </span>
                            <span className='text-muted-foreground ml-1'>
                              /month
                            </span>
                          </div>
                          <p className='text-muted-foreground mt-2'>
                            {plan.description}
                          </p>
                          <ul className='space-y-3 my-6 flex-grow'>
                            {plan.features.map((feature, j) => (
                              <li key={j} className='flex items-center'>
                                <Check className='mr-2 size-4 text-primary' />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className={`w-full mt-auto rounded-full ${
                              plan.popular
                                ? 'bg-primary hover:bg-primary/90'
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                            variant={plan.popular ? 'default' : 'outline'}
                          >
                            {plan.cta}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value='annually'>
                <div className='grid gap-6 lg:grid-cols-3 lg:gap-8'>
                  {[
                    {
                      name: 'Starter',
                      price: '$23',
                      description: 'Perfect for small teams and startups.',
                      features: [
                        'Up to 5 team members',
                        'Basic analytics',
                        '5GB storage',
                        'Email support',
                      ],
                      cta: 'Start Free Trial',
                    },
                    {
                      name: 'Professional',
                      price: '$63',
                      description: 'Ideal for growing businesses.',
                      features: [
                        'Up to 20 team members',
                        'Advanced analytics',
                        '25GB storage',
                        'Priority email support',
                        'API access',
                      ],
                      cta: 'Start Free Trial',
                      popular: true,
                    },
                    {
                      name: 'Enterprise',
                      price: '$159',
                      description:
                        'For large organizations with complex needs.',
                      features: [
                        'Unlimited team members',
                        'Custom analytics',
                        'Unlimited storage',
                        '24/7 phone & email support',
                        'Advanced API access',
                        'Custom integrations',
                      ],
                      cta: 'Contact Sales',
                    },
                  ].map((plan, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <Card
                        className={`relative overflow-hidden h-full ${
                          plan.popular
                            ? 'border-primary shadow-lg'
                            : 'border-border/40 shadow-md'
                        } bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
                      >
                        {plan.popular && (
                          <div className='absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg'>
                            Most Popular
                          </div>
                        )}
                        <CardContent className='p-6 flex flex-col h-full'>
                          <h3 className='text-2xl font-bold'>{plan.name}</h3>
                          <div className='flex items-baseline mt-4'>
                            <span className='text-4xl font-bold'>
                              {plan.price}
                            </span>
                            <span className='text-muted-foreground ml-1'>
                              /month
                            </span>
                          </div>
                          <p className='text-muted-foreground mt-2'>
                            {plan.description}
                          </p>
                          <ul className='space-y-3 my-6 flex-grow'>
                            {plan.features.map((feature, j) => (
                              <li key={j} className='flex items-center'>
                                <Check className='mr-2 size-4 text-primary' />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            className={`w-full mt-auto rounded-full ${
                              plan.popular
                                ? 'bg-primary hover:bg-primary/90'
                                : 'bg-muted hover:bg-muted/80'
                            }`}
                            variant={plan.popular ? 'default' : 'outline'}
                          >
                            {plan.cta}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id='faq' className='w-full py-20 md:py-32'>
        <div className='px-4 md:px-6'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
          >
            <Badge
              className='rounded-full px-4 py-1.5 text-sm font-medium'
              variant='secondary'
            >
              FAQ
            </Badge>
            <h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
              Frequently Asked Questions
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-lg'>
              Find answers to common questions about our platform.
            </p>
          </motion.div>

          <div className='mx-auto max-w-3xl'>
            <Accordion type='single' collapsible className='w-full'>
              {[
                {
                  question: 'How does the 14-day free trial work?',
                  answer:
                    'Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.',
                },
                {
                  question: 'Can I change plans later?',
                  answer:
                    'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.',
                },
                {
                  question: 'Is there a limit to how many users I can add?',
                  answer:
                    'The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.',
                },
                {
                  question:
                    'Do you offer discounts for nonprofits or educational institutions?',
                  answer:
                    'Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.',
                },
                {
                  question: 'How secure is my data?',
                  answer:
                    'We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.',
                },
                {
                  question: 'What kind of support do you offer?',
                  answer:
                    'Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.',
                },
              ].map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${i}`}
                    className='border-b border-border/40 py-2'
                  >
                    <AccordionTrigger className='text-left font-medium hover:no-underline'>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-muted-foreground'>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  )
}
