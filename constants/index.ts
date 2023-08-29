import { ElementType, ReactNode } from 'react';
import { Home, BadgePlus, PieChart, User, LogOut,  } from 'lucide-react';


interface NavBarLinksProps {
  icon: ElementType;
  route: string;
  label: string;
}

export const navbarLinks: NavBarLinksProps[] = [
  {
    icon: Home,
    route: '/dashboard',
    label: 'Home',
  },
  {
    icon: BadgePlus,
    route: '/dashboard/add-job',
    label: 'Add job',
  },
  {
    icon: PieChart,
    route: '/dashboard/stats',
    label: 'Stats',
  },
  {
    icon: User,
    route: '/dashboard/profile',
    label: 'Profile',
  },
  {
    icon: LogOut,
    route: '/dashboard/log-out',
    label: 'Log Out',
  },
];
