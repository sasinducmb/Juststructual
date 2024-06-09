import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderOne from "../../wrappers/hero-slider/HeroSliderOne";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import TabProduct from "../../wrappers/product/TabProduct";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import CtaTwo from '../../wrappers/cta/CtaTwo';

const HomeFashion = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Online Store"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderOne />

        {/* featured icon */}
        {/* <FeatureIcon spaceTopClass="pt-100" spaceBottomClass="pb-60" /> */}

        {/* tab product */}
        <TabProduct
          spaceTopClass="pt-100"
          spaceBottomClass="pb-60"
          category="fashion"
        />

        {/* call to action */}
        <CtaTwo spaceTopClass="pt-120" spaceBottomClass="pb-120" />

        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
