'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third Party Imports
import type { ApexOptions } from 'apexcharts'

// Type Imports
import type { SystemMode } from '@core/types'

// Components Imports
import OptionMenu from '@core/components/option-menu'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [
  {
    name: 'Sales',
    data: [24165, 18850, 16375, 13567, 8800]
  }
]

const CardWidgetsSalesCountry = ({ serverMode }: { serverMode: SystemMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        barHeight: '59%',
        horizontal: true,
        distributed: true,
        borderRadiusApplication: 'end'
      }
    },
    dataLabels: {
      offsetY: 8,
      style: {
        fontWeight: 500,
        fontSize: '0.8125rem'
      }
    },
    grid: {
      strokeDashArray: 8,
      borderColor: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`),
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -30,
        left: 21,
        right: 25,
        bottom: -5
      }
    },
    colors: [
      rgbaToHex(`rgb(${theme.palette.primary.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.success.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.warning.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.info.mainChannel} / 1)`),
      rgbaToHex(`rgb(${theme.palette.error.mainChannel} / 1)`)
    ],
    legend: { show: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['US', 'IN', 'JA', 'CA', 'AU'],
      labels: {
        formatter: val => `${Number(val) / 1000}k`,
        style: {
          fontSize: '0.8125rem',
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)
        }
      }
    },
    yaxis: {
      labels: {
        align: theme.direction === 'rtl' ? 'right' : 'left',
        style: {
          fontWeight: 500,
          fontSize: '0.9375rem',
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`)
        },
        offsetX: theme.direction === 'rtl' ? -15 : -30
      }
    },
    responsive: [
      {
        breakpoint: 1310,
        options: {
          chart: {
            height: 384
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          chart: {
            height: 302
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          chart: {
            height: 318
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader
        title='Sales Country'
        subheader='Total $42,580 Sales'
        action={<OptionMenu options={['Last 28 Days', 'Last Month', 'Last Year']} />}
      />
      <CardContent>
        <AppReactApexCharts type='bar' height={302} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default CardWidgetsSalesCountry
