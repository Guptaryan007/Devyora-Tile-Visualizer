import './Crop.css'

function Crop() {
  const handleReturn = () => {}
  const handleZoom = () => {}
  const handleRotate = () => {}
  const handleStraighten = () => {}
  const handleResetCrop = () => {}
  const handleConfirmCrop = () => {}

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen">
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/85 backdrop-blur-xl pt-safe shadow-[0_1px_12px_rgba(0,0,0,0.45)]">
        <div className="h-16 px-margin flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <button
              aria-label="Return"
              className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
              onClick={handleReturn}
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
            <div className="flex items-center gap-space-sm">
              <img
                alt="DEVYORA Architectural Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WtFhkYkqGoBmQILH5fWGUR9_xP0LcxA_C7Hm6RM7Ngg4Yxs7gsBWyQvPg2r7QMyaBuBZVhM2RrlN7uKwz6JPvAqfs8ccTb_m-q2o-hzA5lIblHn7cyMpjQtoLV5iyqvVa2kTkgNck0KLGOEtA00-k9y88fkjUeT5-Im1ZUXNIobvVStBdpp1uvISBWQNsw4HUXHKDstoAHUYSsU6wBWNPU23xRnW80vGeofmhMRmaBUc1ECxC9ClFxId4"
              />
              <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">DEVYORA</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-headline-sm text-headline-sm uppercase text-on-surface">Surface Selection</span>
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Visualizer</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(197,168,128,0.18)]">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Progress Stepper & Micro Context */}
          <div className="px-margin pt-space-sm pb-space-xs flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary">Calibration Mode</span>
            </div>
            <div className="flex items-center gap-space-xs bg-surface-container-high px-space-sm py-0.5 rounded-full shadow-sm">
              <span className="font-body-sm text-body-sm text-primary font-semibold">02</span>
              <span className="font-body-sm text-body-sm text-outline">/</span>
              <span className="font-body-sm text-body-sm text-outline">06</span>
            </div>
          </div>
          {/* Header Section */}
          <div className="px-margin pt-space-xs pb-space-sm flex flex-col gap-1">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-wide">
              Crop the tile
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Select the tile surface you want to use as the design reference.
            </p>
          </div>
          {/* Floating Fine-Tuning Micro-Toolbar */}
          <div className="px-margin pb-space-sm flex items-center justify-between">
            <div className="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-full shadow-md">
              {/* Zoom Toggle Pill */}
              <button
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface active:scale-95 transition-all text-body-sm font-body-sm"
                id="zoomBtn"
                type="button"
                onClick={handleZoom}
              >
                <span className="material-symbols-outlined text-[16px] text-primary">zoom_in</span>
                <span className="font-body-sm text-body-sm text-on-surface" id="zoomLabel">
                  1.0x
                </span>
              </button>
              {/* Rotate 90 deg */}
              <button
                aria-label="Rotate 90 degrees"
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-all"
                id="rotateBtn"
                type="button"
                onClick={handleRotate}
              >
                <span className="material-symbols-outlined text-[18px]">rotate_90_degrees_cw</span>
              </button>
              {/* Straighten Mode */}
              <button
                aria-label="Auto straighten alignment"
                className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-all"
                id="straightenBtn"
                type="button"
                onClick={handleStraighten}
              >
                <span className="material-symbols-outlined text-[18px]">crop_rotate</span>
              </button>
            </div>
            {/* Live Dimension Pill Badge */}
            <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-full shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-primary">square_foot</span>
              <span className="font-spec-numeral text-body-sm text-on-surface font-light" id="dimensionTag">
                600 × 600 mm
              </span>
            </div>
          </div>
          {/* Central Interactive Cropping Viewport */}
          <div className="px-margin flex flex-col items-center">
            <div
              className="relative w-full aspect-square max-w-[420px] bg-surface-container-lowest rounded-xl overflow-hidden shadow-2xl touch-none select-none"
              id="cropCanvas"
            >
              {/* Captured Tile Photograph Target */}
              <div
                className="absolute inset-0 w-full h-full flex items-center justify-center transition-transform duration-300 ease-out origin-center"
                id="tileImageWrapper"
              >
                <img
                  alt="Luxury architectural porcelain slab tile sample"
                  className="w-full h-full object-cover pointer-events-none filter contrast-[1.02] brightness-95"
                  id="tileImg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO9Sw_P-OLg87i2fEL8bhqb8bY9LFOd8fpZLTLgsoNtXVRfm4NFxWPp5kgtuBAq_3oWjY-p9xi5--YUo1YRWwX8h9JbDuKMofZI84duIuJfsosmMt4mZEjXhis9pAeFbvoarHs3sctbv9E-YilGGMdjHJVn47bq9zisvF5og0lnYdS3vFJ9cVcicux8PaxpbdreYFD8zBNR3uQ_My1Ke46aBZ9BTwLWTm5VzOau3JhRtLoE-M0gHoRsQ"
                />
              </div>
              {/* Scrim Vignette Overlay (Darkens non-cropped zone subtly) */}
              <div className="absolute inset-0 bg-surface-container-lowest/60 pointer-events-none"></div>
              {/* Active Precision Crop Box */}
              <div
                className="absolute inset-6 shadow-[0_0_0_9999px_rgba(18,19,20,0.55)] cursor-move pointer-events-auto transition-all duration-75"
                id="cropBox"
              >
                {/* Rule-of-Thirds Grid Lines (Architectural Reticle) */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none">
                  <div className="bg-primary/10"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-primary/10"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-primary/15 flex items-center justify-center">
                    {/* Reticle Crosshair Indicator */}
                    <div className="w-2 h-2 rounded-full bg-primary/40"></div>
                  </div>
                  <div className="bg-transparent"></div>
                  <div className="bg-primary/10"></div>
                  <div className="bg-transparent"></div>
                  <div className="bg-primary/10"></div>
                </div>
                {/* Solid Bronze Architectural Corner Handles (Upper Left) */}
                <div className="absolute -top-1.5 -left-1.5 w-5 h-5 flex flex-col justify-between pointer-events-none">
                  <span className="w-5 h-1.5 bg-primary rounded-xs"></span>
                  <span className="w-1.5 h-3.5 bg-primary rounded-xs"></span>
                </div>
                {/* Upper Right */}
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 flex flex-col items-end justify-between pointer-events-none">
                  <span className="w-5 h-1.5 bg-primary rounded-xs"></span>
                  <span className="w-1.5 h-3.5 bg-primary rounded-xs"></span>
                </div>
                {/* Lower Left */}
                <div className="absolute -bottom-1.5 -left-1.5 w-5 h-5 flex flex-col justify-between pointer-events-none">
                  <span className="w-1.5 h-3.5 bg-primary rounded-xs"></span>
                  <span className="w-5 h-1.5 bg-primary rounded-xs"></span>
                </div>
                {/* Lower Right */}
                <div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 flex flex-col items-end justify-between pointer-events-none">
                  <span className="w-1.5 h-3.5 bg-primary rounded-xs"></span>
                  <span className="w-5 h-1.5 bg-primary rounded-xs"></span>
                </div>
                {/* Micro Mid-Point Grip Notches */}
                <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-4 bg-primary-container rounded-xs shadow-sm"></div>
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-4 bg-primary-container rounded-xs shadow-sm"></div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-primary-container rounded-xs shadow-sm"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-primary-container rounded-xs shadow-sm"></div>
                {/* Live Crop Dimension Indicator Overlay on Box Edge */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-surface-container-highest/95 backdrop-blur-md px-2 py-0.5 rounded text-on-surface shadow-md pointer-events-none flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-primary"></span>
                  <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">Ratio 1:1</span>
                </div>
              </div>
              {/* Tactile Drag Gesture Feedback Hint */}
              <div
                className="absolute bottom-3 inset-x-0 mx-auto w-fit flex items-center gap-1.5 bg-surface-container-highest/80 backdrop-blur-md px-3 py-1 rounded-full shadow-lg pointer-events-none transition-opacity duration-300"
                id="gestureHint"
              >
                <span className="material-symbols-outlined text-[14px] text-primary">drag_pan</span>
                <span className="font-body-sm text-body-sm text-on-surface font-light">Drag corners to frame natural vein</span>
              </div>
            </div>
          </div>
          {/* Spec Readout Bar for Showroom Client Presentation */}
          <div className="px-margin pt-space-md pb-space-xs">
            <div className="bg-surface-container p-space-sm rounded-xl flex items-center justify-between shadow-sm">
              <div className="flex flex-col min-w-0 pr-2">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Detected Finish</span>
                <span className="font-body-md text-body-md text-on-surface font-medium truncate">Navona Travertine • Matte Honed</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-high px-space-sm py-1 rounded-lg">
                <span className="material-symbols-outlined text-[18px] text-primary">grain</span>
                <span className="font-label-caps text-label-caps uppercase text-primary tracking-wider">R10 Rating</span>
              </div>
            </div>
          </div>
          {/* Perspective Precision Slider Control (Straightening Arc) */}
          <div className="px-margin pt-space-xs pb-space-sm flex flex-col gap-1.5">
            <div className="flex justify-between items-center">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">Alignment Yaw</span>
              <span className="font-spec-numeral text-body-sm text-primary" id="yawReadout">
                0.0°
              </span>
            </div>
            <div className="relative w-full h-8 flex items-center bg-surface-container-low rounded-lg px-3">
              {/* Tick Marks */}
              <div className="absolute inset-x-4 flex justify-between items-center pointer-events-none opacity-20">
                <span className="w-0.5 h-2 bg-on-surface"></span>
                <span className="w-0.5 h-1.5 bg-on-surface"></span>
                <span className="w-0.5 h-1.5 bg-on-surface"></span>
                <span className="w-0.5 h-3 bg-primary opacity-100"></span>
                <span className="w-0.5 h-1.5 bg-on-surface"></span>
                <span className="w-0.5 h-1.5 bg-on-surface"></span>
                <span className="w-0.5 h-2 bg-on-surface"></span>
              </div>
              <input
                className="w-full appearance-none bg-transparent h-6 cursor-pointer focus:outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-grab"
                id="yawSlider"
                max="15"
                min="-15"
                step="0.5"
                type="range"
                defaultValue="0"
              />
            </div>
          </div>
          {/* Bottom Persistent Ergonomic Action Bar */}
          <div className="mt-auto px-margin pt-space-xs pb-space-md">
            <div className="flex items-center gap-space-sm w-full">
              {/* Secondary Reset Button */}
              <button
                className="h-[52px] px-space-md rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-label-caps text-label-caps tracking-widest uppercase font-semibold"
                id="resetCropBtn"
                type="button"
                onClick={handleResetCrop}
              >
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
                <span className="">Reset</span>
              </button>
              {/* Primary CTA: Use This Tile */}
              <button
                className="flex-1 h-[52px] rounded-lg bg-primary text-on-primary hover:bg-primary-fixed-dim active:scale-[0.98] shadow-[0_4px_20px_rgba(197,168,128,0.25)] transition-all flex items-center justify-center gap-2 font-title-md text-title-md font-semibold tracking-wide"
                id="confirmCropBtn"
                type="button"
                onClick={handleConfirmCrop}
              >
                <span className="">Use This Tile</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Crop
