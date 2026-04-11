"use client";

import React, { useState } from 'react';

// 地图标记数据
interface MapMarker {
  id: string;
  name: string;
  province: string;
  x: number;
  y: number;
  description: string;
}

const markers: MapMarker[] = [
  {
    id: 'pingtan',
    name: 'Pingtan Island',
    province: 'Fujian',
    x: 70,
    y: 65,
    description: 'A coastal gem with pristine beaches and unique stone houses'
  },
  {
    id: 'gannan',
    name: 'Gannan Tibetan Autonomous Prefecture',
    province: 'Gansu',
    x: 20,
    y: 45,
    description: 'Scenic grasslands and Tibetan culture in northwestern China'
  },
  {
    id: 'hongcun',
    name: 'Hongcun Village',
    province: 'Anhui',
    x: 45,
    y: 50,
    description: 'An ancient village with traditional Hui-style architecture'
  },
  {
    id: 'zhoushan',
    name: 'Zhoushan Islands',
    province: 'Zhejiang',
    x: 65,
    y: 55,
    description: 'A group of islands with beautiful beaches and seafood'
  },
  {
    id: 'lijiang',
    name: 'Lijiang Ancient Town',
    province: 'Yunnan',
    x: 35,
    y: 60,
    description: 'A UNESCO World Heritage site with Naxi ethnic culture'
  },
  {
    id: 'hulunbuir',
    name: 'Hulunbuir Grassland',
    province: 'Inner Mongolia',
    x: 25,
    y: 25,
    description: 'Vast grasslands with Mongolian nomadic culture'
  }
];

const ChinaMap: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);

  // 处理标记点击
  const handleMarkerClick = (marker: MapMarker) => {
    setSelectedMarker(marker);
  };

  // 处理地图点击，关闭详情
  const handleMapClick = () => {
    setSelectedMarker(null);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* 中国地图 SVG */}
      <div className="relative w-full aspect-[4/3] max-h-[600px] mx-auto">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 80"
          className="cursor-pointer"
          onClick={handleMapClick}
        >
          {/* 中国轮廓 */}
          <path
            d="M30,10 Q40,5 50,10 T70,15 M70,15 Q80,20 85,30 T80,45 Q75,55 70,60 T50,65 T30,60 T20,45 T25,30 T30,10"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="0.5"
          />
          
          {/* 海南岛 */}
          <path
            d="M65,70 Q68,72 70,75 T65,80 T60,75 T65,70"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="0.3"
          />
          
          {/* 台湾岛 */}
          <path
            d="M85,40 Q88,42 90,45 T88,50 T85,52 T82,48 T85,40"
            fill="#e2e8f0"
            stroke="#94a3b8"
            strokeWidth="0.3"
          />

          {/* 地图标记 */}
          {markers.map((marker) => (
            <g 
              key={marker.id} 
              onClick={(e) => {
                e.stopPropagation();
                handleMarkerClick(marker);
              }}
              className="cursor-pointer"
              style={{ transformOrigin: `${marker.x}px ${marker.y}px` }}
            >
              {/* 扩大点击区域的透明圆 */}
              <circle cx={marker.x} cy={marker.y} r="4" fill="transparent" />
              <circle
                cx={marker.x}
                cy={marker.y}
                r="1"
                fill={selectedMarker?.id === marker.id ? '#1e40af' : '#059669'}
                className="transition-all duration-300"
                style={{ transform: selectedMarker?.id === marker.id ? 'scale(1.5)' : 'scale(1)' }}
              />
              <circle
                cx={marker.x}
                cy={marker.y}
                r="2"
                fill={selectedMarker?.id === marker.id ? 'rgba(30, 64, 175, 0.3)' : 'rgba(5, 150, 105, 0.3)'}
                className="transition-all duration-300"
                style={{ transform: selectedMarker?.id === marker.id ? 'scale(1.5)' : 'scale(1)' }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* 选中标记的详情 */}
      {selectedMarker && (
        <div className="absolute top-4 right-4 bg-white p-6 rounded-lg shadow-xl max-w-xs z-10 border border-primary/10">
          <h3 className="text-xl font-semibold mb-1">{selectedMarker.name}</h3>
          <p className="text-gray-500 mb-3">{selectedMarker.province}</p>
          <p className="text-gray-700 mb-4">{selectedMarker.description}</p>
          <button
            onClick={() => setSelectedMarker(null)}
            className="text-sm text-primary hover:underline"
          >
            Close
          </button>
        </div>
      )}

      {/* 地图说明 */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Click on the markers to discover hidden destinations</p>
      </div>
    </div>
  );
};

export default ChinaMap;
