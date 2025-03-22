document.getElementById("year").innerHTML = new Date().getFullYear();
//image button 
function setupCarousel(imageId, prevBtnId, nextBtnId, imageArray) {
    let currentIndex = 0;
    const imgElement = document.getElementById(imageId);
    const prevBtn = document.getElementById(prevBtnId);
    const nextBtn = document.getElementById(nextBtnId);
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
      imgElement.src = imageArray[currentIndex];
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % imageArray.length;
      imgElement.src = imageArray[currentIndex];
    });
  };
  if (document.getElementById("carouselImage1")) {
    setupCarousel("carouselImage1", "prevBtn1", "nextBtn1", [
      "index_img/IMSB_full-facility2.jpg",
      "index_img/og-hours.jpg",
      "index_img/og-imsb.jpg"
    ]);
  }
  if (document.getElementById("carouselImage2")) {
    setupCarousel("carouselImage2", "prevBtn2", "nextBtn2", [
      "image_2/UMSI_DesignJam_GreatLakesWaterSafety_01.jpg",
      "image_2/UMSI_MHIClassroom_02202023_08.jpg",
      "image_2/UMSI_UXatUM_Conference_04.jpg"
    ]);
  }
  
  if (document.getElementById("carouselImage3")) {
    setupCarousel("carouselImage3", "prevBtn3", "nextBtn3", [
      "image_1/criticalincident.jpg",
      "image_1/finance.jpg",
      "image_1/food.jpg",
      "image_1/housingtransportation.jpg",
      "image_1/healthcare-1.jpg"
    ]);
  }

  if (document.getElementById("carouselImage4")) {
    setupCarousel("carouselImage4", "prevBtn4", "nextBtn4", [
      "image_3/UMSI_fallcampus_10.10.22_9.jpg",
      "image_3/UMSI_MSICampusTourOrientation_082422_12.jpg",
      "image_3/UMSI_Spring_2022_05.jpg",
      "image_3/UMSI_SpringCampus_04122022_003.jpg",
      "image_3/UMSI_Wintercampus02032022_36.jpg"
    ]);
  }
  
  

  
  

  
