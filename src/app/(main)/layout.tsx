import Link from 'next/link'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports

import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

import ModeDropdown from '@components/layout/shared/ModeDropdown'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'
import Logo from '@/@core/svg/Logo'

type Props = ChildrenType & {
  params: { lang: Locale }
}

const Layout = ({ children, params }: Props) => {
  // Vars

  const direction = i18n.langDirection['en']
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <div className='flex justify-between w-full items-center px-6 py-3 border-b'>
        <div className='flex items-center gap-2'>
          <Logo /> <span>TS</span>
        </div>
        <div className='flex gap-2 items-center'>
          <Link href={'/login'}>Login</Link>
          <ModeDropdown />
        </div>
      </div>
      <BlankLayout systemMode={systemMode}>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
