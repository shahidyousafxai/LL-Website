// Library Imports
import React, { FC, useState, useEffect } from 'react';

// Local Imports
import HeroSection from '../HeroSection';
import LocationsSection from '../LocationsSection';
import ApiController from '@/network/api';

const HeroSectionAndLocationSection: FC = () => {
  // STATES
  const [campusesList, setCampusesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    state: '',
    stateId: '',
    city: '',
    cityId: '',
    type: '',
    unitSize: '',
    latitude: 0,
    longitude: 0,
  });
  const [serverError, setServerError] = useState(false);

  // METHODS AND FUNCTIONS
  const fetchWebCampusesSearchCall = async () => {
    setLoading(true);
    ApiController.fetchWebCampusSearchCall({}, (response) => {
      if (response.success) {
        const data = response?.data;
        if (data?.length === 0) {
          setCampusesList([]);
        }
        setCampusesList((): any => {
          if (Array.isArray(data)) {
            const flattendCampuse = data?.map((item: any) => {
              const stateName = item?.name;
              const code = item?.code;
              return item?.campus?.map((o: any) => {
                return {
                  id: o?.id,
                  name: o?.name,
                  city: o?.city,
                  number_of_units: o?.number_of_units,
                  street: o?.street,
                  postalcode: o?.postalcode,
                  facility_latitude: o?.facility_latitude,
                  facility_longitude: o?.facility_longitude,
                  unit_type: o?.unit_type,
                  availability: o?.availability,
                  campus_contact: o?.campus_contact,
                  weekday_from: o?.weekday_from,
                  weekday_to: o?.weekday_to,
                  from_hour: o?.from_hour,
                  to_hour: o?.to_hour,
                  state_name: stateName,
                  code: code,
                  campus_page_uid: o?.campus_page_uid,
                  unit_page_endUrl: o?.campus_page_end_url,
                };
              });
            });
            const finalFlattenCampuses = flattendCampuse
              ?.flat()
              ?.sort((a: any, b: any) => a?.id - b?.id);
            return finalFlattenCampuses;
          }
        });
        setLoading(false);
      } else {
        console.log('response', response);
        setLoading(false);
        setCampusesList([]);
        if (response?.data?.message === 'Something went wrong') {
          setServerError(true);
        } else {
          setServerError(false);
        }
      }
    });
  };

  const createPayload = (action: string) => {
    if (action === 'nearby') {
      return {
        latitude: searchData?.latitude,
        longitude: searchData?.longitude,
      };
    } else {
      return {
        state: searchData?.state,
        city: searchData?.city,
        unit_size: searchData?.unitSize?.toUpperCase(),
        storageFeatures: searchData?.type?.toUpperCase(),
      };
    }
  };

  const fetchWebCampusesSearchWithFiltersCall = async (action: string) => {
    setLoading(true);
    ApiController.fetchWebCampusSearchCall(
      createPayload(action),
      (response) => {
        if (response.success) {
          const data = response?.data;
          setCampusesList((): any => {
            if (Array.isArray(data)) {
              const flattendCampuse = data?.map((item: any) => {
                const stateName = item?.name;
                const code = item?.code;
                return item?.campus?.map((o: any) => {
                  return {
                    id: o?.id,
                    name: o?.name,
                    city: o?.city,
                    number_of_units: o?.number_of_units,
                    street: o?.street,
                    postalcode: o?.postalcode,
                    facility_latitude: o?.facility_latitude,
                    facility_longitude: o?.facility_longitude,
                    unit_type: o?.unit_type,
                    availability: o?.availability,
                    campus_contact: o?.campus_contact,
                    weekday_from: o?.weekday_from,
                    weekday_to: o?.weekday_to,
                    from_hour: o?.from_hour,
                    to_hour: o?.to_hour,
                    state_name: stateName,
                    code: code,
                  };
                });
              });
              const finalFlattenCampuses = flattendCampuse
                ?.flat()
                ?.sort((a: any, b: any) => a?.id - b?.id);
              return finalFlattenCampuses;
            }
          });
          setLoading(false);
        } else {
          setCampusesList([]);
          setLoading(false);
        }
      }
    );
  };

  useEffect(() => {
    fetchWebCampusesSearchCall();
    const showPosition = (postion: GeolocationPosition) => {
      setSearchData({
        ...searchData,
        latitude: postion.coords.latitude,
        longitude: postion.coords.longitude,
      });
      return postion;
    };
    navigator.geolocation.getCurrentPosition(showPosition, (error) => {
      console.log('error', error);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <HeroSection
        searchData={searchData}
        setSearchData={setSearchData}
        loading={loading}
        onSearch={() => fetchWebCampusesSearchWithFiltersCall('search')}
        onNearbySearch={() => fetchWebCampusesSearchWithFiltersCall('nearby')}
      />
      <LocationsSection
        loading={loading}
        campuses={campusesList}
        serverError={serverError}
      />
    </React.Fragment>
  );
};
export default HeroSectionAndLocationSection;
