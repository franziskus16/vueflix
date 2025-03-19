import type { Plan } from './interfaces'

export const plansMock: Plan[] = [
  {
    title: 'Standard with ads - 1080p',
    price: '6.99',
    features: [
      'Video and sound quality: Good',
      'Resolution: 1080p (FullHD)',
      'Supported Devices: TV, computer, mobile phone, tablet',
      'Devices your household can watch at the same time: 2',
      'Download devices: 2',
      'Ads: Less than you might think',
    ],
    isBest: false,
  },
  {
    title: 'Standard - 1080p',
    price: '13.99',
    features: [
      'Video and sound quality: Good',
      'Resolution: 1080p (FullHD)',
      'Supported Devices: TV, computer, mobile phone, tablet',
      'Devices your household can watch at the same time: 2',
      'Download devices: 2',
      'Ads: No Ads',
    ],
    isBest: false,
  },
  {
    title: 'Premium - 4K + HDR',
    price: '19.99',
    features: [
      'Video and sound quality: Best',
      'Resolution: 4K (Ultra HD) + HDR',
      'Supported Devices: TV, computer, mobile phone, tablet',
      'Devices your household can watch at the same time: 4',
      'Download devices: 6',
      'Ads: No Ads',
    ],
    isBest: true,
  },
]
