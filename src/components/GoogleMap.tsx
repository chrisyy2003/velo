import React from 'react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

const GoogleMap: React.FC = () => {
  // 默认位置设置为北京
  const defaultCenter = { lat: 39.9042, lng: 116.4074 }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <APIProvider apiKey={''}>
        <Map
          defaultCenter={defaultCenter}
          defaultZoom={10}
          style={{ width: '100%', height: '100%' }}
          gestureHandling={'greedy'}
          disableDefaultUI={false}
        />
      </APIProvider>
    </div>
  )
}

export default GoogleMap
