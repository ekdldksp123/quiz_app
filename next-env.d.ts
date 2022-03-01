/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
import { ChartTypeRegistry } from 'chart.js'

declare module 'chart.js' {
    interface ChartTypeRegistry {
        derivedDoughnut: ChartTypeRegistry['doughnut']
    }
}