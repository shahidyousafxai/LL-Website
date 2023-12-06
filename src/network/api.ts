import { ApiServices } from './apiServices';
import { endPoints } from './constants';

class controller {
  // Fetch States
  fetchStatesCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendGetWithoutAuth(
      payload,
      endPoints.fetchStates,
      callBack
    );
  };

  // Fetch Cities Depends Upon States
  fetchStatesCityCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendPostWithoutAuth(
      payload,
      endPoints.fetchStatesCity,
      callBack
    );
  };

  // Fetch Units
  fetchUnitSearchCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    const endpoint = `${endPoints.fetchUnitSearch}?${
      payload?.state !== '' ? `&state=${payload?.state}` : ''
    }${payload?.city !== '' ? `&city=${payload?.city}` : ''}${
      payload?.unit_size !== '' ? `&unit_size=${payload?.unit_size}` : ''
    }${payload?.type !== '' ? `&storage_feature=${payload?.type}` : ''}`;
    return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
  };

  // Fetch Locations
  fetchLocationsCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendGetWithoutAuth(
      payload,
      endPoints.fetchLocations,
      callBack
    );
  };

  // Submit Reservation Form
  submitReservationCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendPostWithoutAuth(
      payload,
      endPoints.submitReservation,
      callBack
    );
  };

  // Web Campuse Search
  fetchWebCampusSearchCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    let endPointWithFilter = endPoints.fetchWebCampusSearch;
    if (
      (payload?.latitude && payload?.longitude) !== undefined &&
      payload?.latitude !== '' &&
      payload?.longitude !== ''
    ) {
      endPointWithFilter = `${endPoints.fetchWebCampusSearch}?latitude=${payload?.latitude}&longitude=${payload?.longitude}`;
    } else if ((payload?.state && payload?.city && payload?.unit_size) !== '') {
      endPointWithFilter = `${endPoints.fetchWebCampusSearch}?state=${payload?.state}&city=${payload?.city}&unit_size=${payload?.unit_size}`;
    } else if ((payload?.state && payload?.city) !== '') {
      endPointWithFilter = `${endPoints.fetchWebCampusSearch}?state=${payload?.state}&city=${payload?.city}`;
    } else if ((payload?.state && payload?.city && payload?.unit_size) !== '') {
      endPointWithFilter = `${endPoints.fetchWebCampusSearch}?state=${payload?.state}&city=${payload?.city}&unit_size=${payload?.unit_size}`;
    }
    if (Object.keys(payload).length !== 0) {
      return ApiServices.sendGetWithoutAuth({}, endPointWithFilter, callBack);
    } else {
      return ApiServices.sendGetWithoutAuth(
        {},
        endPoints.fetchWebCampusSearch,
        callBack
      );
    }
  };

  // Fetch Units By Campus Name

  fetchCampusUnitSearchCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    const endPointWithFilter = `${endPoints.fetchCampusUnitSearch}?campus=${payload?.campus}`;
    return ApiServices.sendGetWithoutAuth(
      payload,
      endPointWithFilter,
      callBack
    );
  };

  // Fetch Meet The Team
  fetchMeetTheTeamCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendGetWithoutAuth(
      {},
      endPoints.fetchMeetTheTeam,
      callBack
    );
  };

  // Fetch FAQ's
  fetchFAQsCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendGetWithoutAuth({}, endPoints.fetchFAQs, callBack);
  };

  // Fetch Single Campus Detail Page
  fetchSingleCampusDetailPageCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendGetWithoutAuth(
      payload,
      endPoints.fetchCampusDetailPage,
      callBack
    );
  };

  // Fetch Single Campus Search Call
  fetchSingleCampusSearchCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    let endpoint = `${endPoints.fetchWebCampusSearch}?name=${payload?.name}`;
    return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
  };

  // Fetch Single Campus Detail Page
  fetchCampusDetailPageCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    let endpoint = `${endPoints.fetchCampusDetailPage}/${payload?.endUrl}/`;
    if (payload?.password !== '') {
      endpoint = `${endPoints.fetchCampusDetailPage}/${payload?.endUrl}/?password=${payload?.password}`;
    }
    return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
  };

  // Fetch Single Campus Detail Page
  fetchUnitDetailPageCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    let endpoint = `${endPoints.fetchUnitDetailPage}/${payload?.pageId}/`;
    if (payload?.password !== '') {
      endpoint = `${endPoints.fetchUnitDetailPage}/${payload?.pageId}/?password=${payload?.password}`;
    }
    return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
  };

  // Fetch Campus By Type of Feature
  fetchCampusByTypeofFeatureCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    let endpoint = `${endPoints.fetchUnitSearch}?storage_feature=${payload?.typeFeature}`;
    return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
  };

  // Fetch Blogs Listing
  fechBlogsListPageCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    if (payload !== '') {
      let endpoint = `${endPoints.fetchBlogsListPage}?tag=${payload}`;
      return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
    } else {
      return ApiServices.sendGetWithoutAuth(
        {},
        endPoints.fetchBlogsListPage,
        callBack
      );
    }
  };

  // Fetch Blogs Listing
  fechTagsListCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    return ApiServices.sendGetWithoutAuth(
      {},
      endPoints.fetchTagsList,
      callBack
    );
  };

  // Fetch Single Blog Page
  fechSingleBlogPageCall = (
    payload: any,
    callBack: (result: { success: boolean; data: any }) => void
  ) => {
    if (payload?.password !== '') {
      let endpoint = `${endPoints.fetchSingeBlogPage}/${payload?.uid}/?password=${payload?.password}`;
      return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
    } else {
      let endpoint = `${endPoints.fetchSingeBlogPage}/${payload?.uid}`;
      return ApiServices.sendGetWithoutAuth({}, endpoint, callBack);
    }
  };
}

const ApiController = new controller();
export default ApiController;
