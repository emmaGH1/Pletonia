import { ElementType, ReactNode } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GrFormAdd } from 'react-icons/gr';
import { ImStatsDots } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { IoMdAddCircleOutline } from 'react-icons/io'

interface NavBarLinksProps {
  icon: ElementType;
  route: string;
  label: string;
}

export const navbarLinks: NavBarLinksProps[] = [
  {
    icon: AiFillHome,
    route: '/dashboard',
    label: 'Home',
  },
  {
    icon: IoMdAddCircleOutline,
    route: '/dashboard/add-job',
    label: 'Add job',
  },
  {
    icon: ImStatsDots,
    route: '/dashboard/stats',
    label: 'Stats',
  },
  {
    icon: CgProfile,
    route: '/dashboard/profile',
    label: 'Profile',
  },
  {
    icon: BiLogOut,
    route: '/dashboard/log-out',
    label: 'Log Out',
  },
];
