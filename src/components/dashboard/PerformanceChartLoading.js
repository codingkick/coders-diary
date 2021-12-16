import React from 'react'
import SkeletonLoader from "tiny-skeleton-loader-react";

export const PerformanceChartLoading = () => {
    return (
        <div>
            <SkeletonLoader width="100%" height="20em"></SkeletonLoader>
        </div>
    )
}