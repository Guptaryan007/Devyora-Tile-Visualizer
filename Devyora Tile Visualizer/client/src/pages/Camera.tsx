import './Camera.css'

function Camera() {
  const handleReturn = () => {}
  const handlePreviousStep = () => {}
  const handleToggleGrid = () => {}
  const handleCapture = () => {}
  const handleUploadFromGallery = () => {}

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
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(197,168,128,0.18)]">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
        </div>
      </header>
      <main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-margin flex items-center justify-between py-space-sm">
            <button
              aria-label="Previous step"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors focus:outline-none"
              type="button"
              onClick={handlePreviousStep}
            >
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </button>
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-low shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-label-caps uppercase text-on-surface-variant tracking-widest">
                Step 01 / 06
              </span>
            </div>
            <button
              aria-label="Toggle camera grid"
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
              id="gridToggleBtn"
              type="button"
              onClick={handleToggleGrid}
            >
              <span className="material-symbols-outlined text-[18px]">grid_3x3</span>
            </button>
          </div>
          <div className="px-margin pt-space-xs pb-space-sm flex flex-col gap-1">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-normal">
              Take a photo of the tile
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Capture one clear tile surface. You can crop it in the next step.
            </p>
          </div>
          <div className="px-margin w-full flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-[420px] rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl flex items-center justify-center select-none">
              <img
                alt="Live tile capture preview"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none scale-105 transition-transform duration-700 ease-out"
                id="viewfinderFeed"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO9Sw_P-OLg87i2fEL8bhqb8bY9LFOd8fpZLTLgsoNtXVRfm4NFxWPp5kgtuBAq_3oWjY-p9xi5--YUo1YRWwX8h9JbDuKMofZI84duIuJfsosmMt4mZEjXhis9pAeFbvoarHs3sctbv9E-YilGGMdjHJVn47bq9zisvF5og0lnYdS3vFJ9cVcicux8PaxpbdreYFD8zBNR3uQ_My1Ke46aBZ9BTwLWTm5VzOau3JhRtLoE-M0gHoRsQ"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/50 via-transparent to-surface-container-lowest/70 pointer-events-none"></div>
              <div
                className="absolute inset-4 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-40 transition-opacity duration-300"
                id="gridOverlay"
              >
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
                <div className="shadow-[inset_0_0_0_0.5px_rgba(255,255,255,0.12)]"></div>
              </div>
              <div className="absolute inset-6 pointer-events-none">
                <div className="absolute top-0 left-0 w-6 h-6 flex flex-col justify-between">
                  <div className="w-6 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)]"></div>
                  <div className="w-[2px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)] -mt-6"></div>
                </div>
                <div className="absolute top-0 right-0 w-6 h-6 flex flex-col items-end justify-between">
                  <div className="w-6 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)]"></div>
                  <div className="w-[2px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)] -mt-6"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-6 h-6 flex flex-col justify-end">
                  <div className="w-[2px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)]"></div>
                  <div className="w-6 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)] -mt-[2px]"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 flex flex-col items-end justify-end">
                  <div className="w-[2px] h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)]"></div>
                  <div className="w-6 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(226,195,153,0.6)] -mt-[2px]"></div>
                </div>
              </div>
              <div className="relative z-10 w-12 h-12 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-[1.5px] bg-primary-container"></div>
                <div className="w-[1.5px] h-2.5 bg-primary-container -ml-[2px]"></div>
                <div className="absolute w-8 h-8 rounded-full shadow-[inset_0_0_0_1px_rgba(197,168,128,0.35)]"></div>
              </div>
              <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
                <div className="px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                    Planar Sensor
                  </span>
                </div>
                <div className="px-2.5 py-1 rounded bg-surface-container-lowest/80 backdrop-blur-md flex items-center gap-1 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-[14px]">wb_sunny</span>
                  <span className="font-body-sm text-body-sm text-on-surface">5400K Even</span>
                </div>
              </div>
              <div className="absolute bottom-3 inset-x-4 flex justify-center pointer-events-none">
                <div className="px-3 py-1.5 rounded-lg bg-surface-container-lowest/85 backdrop-blur-md text-center shadow-lg">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ensure direct top-down angle and even showroom lighting
                  </p>
                </div>
              </div>
              <div
                className="absolute inset-0 bg-on-surface opacity-0 pointer-events-none transition-opacity duration-150"
                id="flashEffect"
              ></div>
            </div>
            <div className="w-full max-w-[420px] mt-space-sm px-space-xs flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low shadow-sm">
                <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  check_circle
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">Level: 90° Top-Down Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">aspect_ratio</span>
                <span className="font-label-caps text-label-caps uppercase tracking-wider">1:1 Flat</span>
              </div>
            </div>
          </div>
          <div className="px-margin pt-space-md pb-space-lg flex flex-col gap-space-sm w-full max-w-[420px] mx-auto">
            <button
              className="w-full min-h-[56px] rounded-lg bg-primary hover:bg-primary-fixed-dim active:scale-[0.985] text-on-primary transition-all duration-150 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(226,195,153,0.22)] focus:outline-none"
              id="captureBtn"
              type="button"
              onClick={handleCapture}
            >
              <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                photo_camera
              </span>
              <span className="font-title-md text-title-md tracking-wider uppercase">Take Photo</span>
            </button>
            <button
              className="w-full min-h-[52px] rounded-lg bg-surface-container hover:bg-surface-container-high active:scale-[0.985] text-on-surface transition-all duration-150 flex items-center justify-center gap-2 shadow-sm focus:outline-none"
              type="button"
              onClick={handleUploadFromGallery}
            >
              <span className="material-symbols-outlined text-[20px] text-primary">photo_library</span>
              <span className="font-title-md text-title-md text-on-surface">Upload from Gallery</span>
            </button>
            <div className="flex items-center justify-center gap-2 pt-space-xs">
              <span className="material-symbols-outlined text-outline text-[16px]">touch_app</span>
              <span className="font-label-caps text-label-caps uppercase text-outline tracking-wider">
                Tap frame to recalibrate autofocus
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Camera
