import React, { FC, useMemo } from 'react';
import Map from '@/components/shared/Map';

interface ILocationMapProps {
  data: any[];
  triggerChildFunction?: any;
}

const DetailsUnitMap: FC<ILocationMapProps> = ({
  data,
  triggerChildFunction,
}) => {
  return useMemo(
    () => <Map data={data} triggerChildFunction={triggerChildFunction} />,
    [data, triggerChildFunction]
  );
};

export default DetailsUnitMap;
