import { Component } from 'react'

class Banner extends Component {

  renderBannerSectors () {
    return window.location.pathname === '/sectors' ? 'c-banner__sectors c-banner__image' : ''
  }
  renderBannerServices () {
    return window.location.pathname === '/services' ? 'c-banner__services c-banner__image' : ''
  }
  renderBannerTestimonials () {
    return window.location.pathname === '/testimonials' ? 'c-banner__testimonials c-banner__image' : ''
  }
  renderBannerAbout () {
    return window.location.pathname === '/about' ? 'c-banner__about c-banner__image' : ''
  }
  renderBannerCareers () {
    return window.location.pathname === '/careers' ? 'c-banner__careers c-banner__image' : ''
  }

  renderBannerContact () {
    return window.location.pathname === '/contact' ? 'c-banner__none' : ''
  }
  renderBannerLegal () {
    return window.location.pathname === '/legal' ? 'c-banner__none' : ''
  }

  renderBannerServicesPainting () {
    return window.location.pathname === '/services/painting' ? 'c-banner__services--painting c-banner__image' : ''
  }
  renderBannerServicesDecorativeCoatings () {
    return window.location.pathname === '/services/decorative-coatings' ? 'c-banner__services--decorative c-banner__image' : ''
  }
  renderBannerServicesProtectiveCoatings () {
    return window.location.pathname === '/services/protective-coatings' ? 'c-banner__services--specialist c-banner__image' : ''
  }
  renderBannerServicesInternalExternalSpray () {
    return window.location.pathname === '/services/internal-external-paint-spray' ? 'c-banner__services--paintspray c-banner__image' : ''
  }
  renderBannerServicesRenderingPlastering () {
    return window.location.pathname === '/services/rendering-plastering' ? 'c-banner__services--plastering c-banner__image' : ''
  }
  renderBannerServicesCladdingRestoration () {
    return window.location.pathname === '/services/cladding-restoration' ? 'c-banner__services--cladding c-banner__image' : ''
  }

  renderBannerSectorsFactoriesIndustrial () {
    return window.location.pathname === '/sectors/factories-industrial' ? 'c-banner__sectors--industrial c-banner__image' : ''
  }
  renderBannerSectorsOffice () {
    return window.location.pathname === '/sectors/offices' ? 'c-banner__sectors--office c-banner__image' : ''
  }
  renderBannerSectorsRetailShop () {
    return window.location.pathname === '/sectors/retail-shops' ? 'c-banner__sectors--retail c-banner__image' : ''
  }
  renderBannerSectorsSchools () {
    return window.location.pathname === '/sectors/schools' ? 'c-banner__sectors--education c-banner__image' : ''
  }

  renderBannerSectorsTitle () {
    return window.location.pathname === '/sectors' ? 'c-banner__active' : ''
  }
  renderBannerServicesTitle () {
    return window.location.pathname === '/services' ? 'c-banner__active' : ''
  }
  renderBannerTestimonialsTitle () {
    return window.location.pathname === '/testimonials' ? 'c-banner__active' : ''
  }
  renderBannerAboutTitle () {
    return window.location.pathname === '/about' ? 'c-banner__active' : ''
  }
  renderBannerCareersTitle () {
    return window.location.pathname === '/careers' ? 'c-banner__active' : ''
  }

  renderBannerServicesPaintingTitle () {
    return window.location.pathname === '/services/painting' ? 'c-banner__active' : ''
  }
  renderBannerServicesDecorativeCoatingsTitle () {
    return window.location.pathname === '/services/decorative-coatings' ? 'c-banner__active' : ''
  }
  renderBannerServicesProtectiveCoatingsTitle () {
    return window.location.pathname === '/services/protective-coatings' ? 'c-banner__active' : ''
  }
  renderBannerServicesInternalExternalSprayTitle () {
    return window.location.pathname === '/services/internal-external-paint-spray' ? 'c-banner__active' : ''
  }
  renderBannerServicesRenderingPlasteringTitle () {
    return window.location.pathname === '/services/rendering-plastering' ? 'c-banner__active' : ''
  }
  renderBannerServicesCladdingRestorationTitle () {
    return window.location.pathname === '/services/cladding-restoration' ? 'c-banner__active' : ''
  }
  renderBannerSectorsFactoriesIndustrialTitle () {
    return window.location.pathname === '/sectors/factories-industrial' ? 'c-banner__active' : ''
  }
  renderBannerSectorsOfficeTitle () {
    return window.location.pathname === '/sectors/offices' ? 'c-banner__active' : ''
  }
  renderBannerSectorsRetailShopTitle () {
    return window.location.pathname === '/sectors/retail-shops' ? 'c-banner__active' : ''
  }
  renderBannerSectorsSchoolsTitle () {
    return window.location.pathname === '/sectors/schools' ? 'c-banner__active' : ''
  }

  render () {
    
    return <div className={`
    c-banner 
    ${this.renderBannerServices()} 
    ${this.renderBannerSectors()} 
    ${this.renderBannerTestimonials()} 
    ${this.renderBannerAbout()} 
    ${this.renderBannerContact()}
    ${this.renderBannerLegal()}
    ${this.renderBannerCareers()}
    ${this.renderBannerServicesPainting()} 
    ${this.renderBannerServicesDecorativeCoatings()} 
    ${this.renderBannerServicesInternalExternalSpray()} 
    ${this.renderBannerServicesProtectiveCoatings()}
    ${this.renderBannerServicesRenderingPlastering()}
    ${this.renderBannerServicesCladdingRestoration()}
    ${this.renderBannerSectorsFactoriesIndustrial()}
    ${this.renderBannerSectorsOffice()}
    ${this.renderBannerSectorsRetailShop()}
    ${this.renderBannerSectorsSchools()}
    `}>
      <div className="c-banner__container">
        <div className="c-banner__title" data-aos="zoom-in">

          <h2 className={`c-banner__title--sectors ${this.renderBannerSectorsTitle()}`}>
            Sectors
          </h2>
          <h2 className={`c-banner__title--services ${this.renderBannerServicesTitle()}`}>
            Services
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerAboutTitle()}`}>
            About
          </h2>
          <h2 className={`c-banner__title--testimonials ${this.renderBannerTestimonialsTitle()}`}>Testimonials
          </h2>
          <h2 className={`c-banner__title--sectors ${this.renderBannerCareersTitle()}`}>
            Careers
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesPaintingTitle()}`}>
            Painting
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesDecorativeCoatingsTitle()}`}>
            Decorative Coatings
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesProtectiveCoatingsTitle()}`}>
            Protective Coatings
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesInternalExternalSprayTitle()}`}>
            Paint Spray
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesCladdingRestorationTitle()}`}>
            Cladding Restoration
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerServicesRenderingPlasteringTitle()}`}>
            Rendering &amp; Plastering
          </h2>

          <h2 className={`c-banner__title--about ${this.renderBannerSectorsFactoriesIndustrialTitle()}`}> 
            Industrial
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerSectorsOfficeTitle()}`}> 
            Office Decorating
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerSectorsRetailShopTitle()}`}>
            Retail Refurbishment
          </h2>
          <h2 className={`c-banner__title--about ${this.renderBannerSectorsSchoolsTitle()}`}> 
            Schools
          </h2>
          <hr className="c-banner__title--line" />
        </div>
      </div>
    </div>
  }
}

export default Banner