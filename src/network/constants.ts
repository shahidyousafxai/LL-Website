const serverURL = 'https://api.luxelocker.com';
const version = 'v1';

const baseURL = `${serverURL}/${version}`;

const endPoints = {
  // Fetch States
  fetchStates: `${baseURL}/fetch-states`,

  // Get States City
  fetchStatesCity: `${baseURL}/fetch-states/`,

  // Unit Search
  fetchUnitSearch: `${baseURL}/web/web-unit-search/`,

  // Fetch Locations
  fetchLocations: `${baseURL}/zones/campus-location-list/`,

  // Submit Reservation Form
  submitReservation: `${baseURL}/web/web-reservatio-campus/`,

  // Web Campus Search
  fetchWebCampusSearch: `${baseURL}/web/web-campus-search/`,

  // Fetch Units By Campus
  fetchCampusUnitSearch: `${baseURL}/web/web-unit-search/`,

  //Fetch Meet The Team
  fetchMeetTheTeam: `${baseURL}/web/meet-the-team`,

  // FAQ's Page
  fetchFAQs: `${baseURL}/web/web-faq/`,

  // Get Single Campus Detail Page
  fetchCampusDetailPage: `${baseURL}/web/campus-page-detail`,

  // Get Single Unit Detail Page
  fetchUnitDetailPage: `${baseURL}/web/unit-page-detail`,

  // Get Blogs List
  fetchBlogsListPage: `${baseURL}/web/blog-post-listing/`,

  // Get Tags List
  fetchTagsList: `${baseURL}/web/blogs-tags/`,

  // Get Blogs List
  fetchSingeBlogPage: `${baseURL}/web/blog-post-detail`,
};

export { endPoints };
