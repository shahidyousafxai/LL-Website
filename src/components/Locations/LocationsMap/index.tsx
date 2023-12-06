import React, { FC, useMemo } from 'react';
import Map from '@/components/shared/Map';

interface ILocationMapProps {
  data: any[];
  triggerChildFunction?: any;
}

const LocationsMapMemoized: FC<ILocationMapProps> = ({
  data,
  triggerChildFunction,
}) => {
  return useMemo(
    () => <Map data={data} triggerChildFunction={triggerChildFunction} />,
    [data, triggerChildFunction]
  );
};

export default LocationsMapMemoized;
