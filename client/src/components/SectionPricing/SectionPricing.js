import React from 'react';
import CardPrice from './CardPrice/CardPrice';
import styles from './SectionPricing.module.sass';

const SectionPricing = () => {
  return (
    <section>
      <div className={styles['pricing-container']}>
        {/* BRONZE */}
        <CardPrice 
          name='Bronze'
          price='299'
          text='Branding on a budget'
          content={{
              items:[{
                  itemText:'Prize to Winner - $135 (Included)',
                  iconsItem: []
                },
                {
                  itemText:'Validation Services & Upgrades ($39 value)',
                  iconsItem: ['Matching .com URL']
                },
                {
                  itemText:'Expected 300+ Entries',
                  iconsItem: []
                }
              ]
            }}
          pricingPlan='pricing-plan--bronze'
          planName='plan-name--bronze'
          classBtn='btn-bronze'
        />
      {/* GOLD */}
      <CardPrice 
          name='Gold'
          price='449'
          text='Increase participation and basic brand validation'
          content={{
              items:[{
                  itemText:'Prize to Winner - $200 (Included)',
                  iconsItem: []
                },
                {
                  itemText:'Validation Services & Upgrades ($305 value)',
                  iconsItem: [
                    'Matching .com URL',
                    'Project Promotion (Basic)', 
                    'Instant Trademark Check (One Database)', 
                    'NDA and More Privac','Project Promotion (Basic)', 
                    'Comprehensive Trademark Research'
                  ]
                },
                {
                  itemText:'Expected 600+ Entries',
                  iconsItem: []
                },
                {
                  itemText:'Partial Refund Option',
                  iconsItem: []
                }
              ]
            }}
          pricingPlan='pricing-plan--gold'
          planName='plan-name--gold'
          classBtn='btn-gold'
        />
      {/* Platium */}
      <CardPrice 
          name='Platinum'
          price='749'
          text='Work with top-level creatives, plus agency-style brand validation'
          content={{
              items:[{
                  itemText:'Prize to Winner - $300 (Included)',
                  iconsItem: []
                },
                {
                  itemText:'Validation Services & Upgrades ($979 value)',
                  iconsItem: [
                    {
                      name: 'Audience Testing (Up to 6 Names)',
                      link: 'View Sample Report',
                      href: '#'
                    },
                    'Comprehensive Trademark Research (3 Names)', 
                    'Linguistics Analysis (3 Names)', 
                    'Tier A Creatives', 
                    'Matching .com URL',
                    'Instant Trademark Check (4 Databases)',
                    'NDA and More Privacy',
                    'Enhanced Project Promotion0',
                    'Team Collaboration Tools',
                  ]
                },
                {
                  itemText:'Expected 1000+ Entries',
                  iconsItem: []
                },
                {
                  itemText:'Partial Refund Option',
                  iconsItem: []
                }
              ]
            }}
          pricingPlan='pricing-plan--platinum'
          planName='plan-name--platinum'
          classBtn='btn-platinum'
        />
      {/* Managed */}
      <CardPrice 
          name='Managed'
          price='1499'
          text='A full agency experience without the agency price tag'
          content={{
              items:[{
                  itemText:'Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.',
                  iconsItem: []
                },
                {
                  itemText:`With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project.`,
                  iconsItem: []
                },
                {
                  itemText:{
                    name: 'Learn More about',
                    link: 'Managed Contest Service',
                    href: '#'
                  },
                  iconsItem: []
                }
              ]
            }}
          pricingPlan='pricing-plan--managed'
          planName='plan-name--managed'
          classBtn='btn-managed'
        />
      </div>
    </section>
  );
}

export default SectionPricing;