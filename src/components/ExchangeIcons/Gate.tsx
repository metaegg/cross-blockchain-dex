import React from 'react'

function Gate({ width, height }: { width?: number; height?: number }) {
  return (
    <svg width={width || 160} height={height || 50} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.1075 24.7734L18.6881 24.3443C18.3663 24.0224 17.82 24.2467 17.82 24.7051V30.7817C17.82 31.0646 18.0541 31.2889 18.3272 31.2889H24.4038C24.8525 31.2889 25.0866 30.7427 24.7647 30.4208C24.5696 30.2258 24.5696 29.9039 24.7647 29.6991L31.2217 23.2226C31.4167 23.0275 31.4167 22.7056 31.2217 22.5008L30.6364 21.9156C30.3146 21.5937 30.5486 21.0475 30.9973 21.0475H37.0641C37.347 21.0475 37.5713 21.2718 37.5713 21.5547V27.6313C37.5713 28.0799 37.0251 28.314 36.7032 27.9921L36.2936 27.5825C36.0888 27.3777 35.7766 27.3777 35.5718 27.5825L24.6769 38.4676C24.4818 38.6627 24.16 38.6627 23.9551 38.4676L10.6316 25.1343C10.4365 24.9392 10.4267 24.6174 10.6316 24.4125L29.0758 5.96825C29.2709 5.77318 29.2709 5.44155 29.0758 5.24648L24.7354 0.906071C24.5404 0.710997 24.2185 0.710997 24.0137 0.906071L0.146306 24.7929C-0.0487686 24.988 -0.0487686 25.3196 0.146306 25.5147L24.0234 49.3918C24.2185 49.5869 24.5501 49.5869 24.7452 49.3918L48.6223 25.5147C48.8174 25.3196 48.8174 24.9978 48.6223 24.7929L34.5769 10.7476C34.3819 10.5525 34.06 10.5525 33.8552 10.7476L19.8293 24.7734C19.6342 24.9685 19.3124 24.9685 19.1075 24.7734ZM129.325 30.811C128.71 30.811 128.174 31.0353 127.735 31.4742C127.296 31.9229 127.071 32.4398 127.071 33.0446C127.071 33.9712 127.54 34.693 128.476 35.2001C129.5 35.483 130.319 35.2977 130.934 34.6637C131.383 34.215 131.597 33.6786 131.597 33.0543C131.597 32.4203 131.373 31.8936 130.934 31.4645C130.485 31.0353 129.959 30.811 129.325 30.811ZM93.0407 13.6444H91.3533C90.6218 13.6444 90.0366 14.2297 90.0366 14.9612V15.8975C88.2419 14.0346 86.2229 13.108 83.9503 13.108C81.3363 13.108 79.1514 14.0833 77.4153 16.0243C75.6693 17.9653 74.8013 20.394 74.8013 23.3006C74.8013 26.2657 75.6694 28.7334 77.4055 30.7232C79.1612 32.6642 81.385 33.6396 84.0673 33.6396C86.1936 33.6396 88.1834 32.7715 90.0268 31.0451V32.8983C90.0268 33.7956 90.7584 34.5369 91.6557 34.5369H94.533V15.1563C94.5428 14.3272 93.8698 13.6444 93.0407 13.6444ZM88.7881 27.9044C87.764 29.0456 86.418 29.621 84.7598 29.621C83.1992 29.621 81.9117 29.026 80.8876 27.8458C79.8927 26.6754 79.3855 25.1538 79.3855 23.3006C79.3855 21.5644 79.9025 20.0916 80.9266 18.9114C81.9605 17.741 83.2577 17.1558 84.7988 17.1558C86.4375 17.1558 87.764 17.7312 88.7881 18.8919C89.8122 20.0721 90.3292 21.5742 90.3292 23.3981C90.3194 25.2221 89.8025 26.7242 88.7881 27.9044ZM74.8013 16.9217V15.0002C74.8013 14.2492 74.1965 13.6444 73.4455 13.6444H71.6703C70.9193 13.6444 70.3146 14.2492 70.3146 15.0002V15.839C68.6954 14.0151 66.6569 13.0982 64.2087 13.0982C61.4192 13.0982 59.1661 14.1516 57.4689 16.2487C55.8888 18.2287 55.0988 20.6378 55.0988 23.4664C55.0988 26.3828 55.9473 28.8115 57.6542 30.7427C59.3416 32.6642 61.507 33.6103 64.16 33.6103C66.4813 33.6103 68.5394 32.7032 70.3243 30.8793V33.5908C70.3243 37.6191 68.6857 39.6381 65.3987 39.6381C63.6138 39.6381 62.258 39.0334 61.3314 37.8239C61.0973 37.5215 60.8925 37.1314 60.7364 36.673C60.5121 36.0292 59.9073 35.6098 59.2343 35.6098H57.5372C56.6789 35.6098 56.0449 36.4291 56.2594 37.2582C56.7276 39.0236 57.625 40.4574 58.9612 41.5693C60.6389 42.9641 62.7749 43.6664 65.3597 43.6664C68.4321 43.6664 70.8413 42.652 72.5969 40.633C73.5235 39.5796 74.1478 38.3213 74.4696 36.8583C74.5769 36.3316 74.6647 35.7073 74.7232 35.0148C74.7818 34.3223 74.811 33.5128 74.811 32.5959V29.7771C73.5528 27.9629 72.9188 25.8073 72.9188 23.2811C72.909 20.8232 73.543 18.7066 74.8013 16.9217ZM69.1149 27.7483C68.12 28.9968 66.7642 29.621 65.0476 29.621C63.3309 29.621 61.9849 29.0065 61.0193 27.7678C60.1317 26.6364 59.683 25.1928 59.683 23.4177C59.683 21.623 60.1317 20.1599 61.0193 19.0285C62.0044 17.7703 63.3504 17.1363 65.0476 17.1363C66.6472 17.1363 67.9542 17.7117 68.9783 18.8724C69.9927 20.0039 70.4999 21.5157 70.4999 23.3981C70.4901 25.1636 70.0317 26.6169 69.1149 27.7483ZM112.109 13.6639V13.6444H102.804V7.94826C102.804 7.21673 102.209 6.62175 101.478 6.62175H99.6635C98.9222 6.62175 98.3175 7.22648 98.3175 7.96776V13.6444H96.4058V17.8288H98.3175V34.5174H100.873C101.936 34.5174 102.794 33.6591 102.804 32.5959V32.5862V17.8385H107.408C107.769 17.146 108.218 16.5023 108.734 15.917C109.681 14.8734 110.812 14.1224 112.109 13.6639ZM135.011 6.62175C134.211 6.62175 133.528 6.90461 132.963 7.48008C132.397 8.05555 132.104 8.72855 132.104 9.51861C132.104 10.3477 132.387 11.0402 132.963 11.6157C133.538 12.1911 134.231 12.474 135.04 12.474C135.85 12.474 136.533 12.1911 137.089 11.6157C137.664 11.0402 137.947 10.3574 137.947 9.53811C137.947 8.72855 137.664 8.04579 137.089 7.48983C136.513 6.90461 135.821 6.62175 135.011 6.62175ZM135.918 15.8488H134.289C133.45 15.8488 132.777 16.5218 132.777 17.3606V31.6108C133.119 32.0107 133.285 32.4886 133.285 33.0348C133.285 33.581 133.119 34.0687 132.777 34.4686V35.2684H135.664C136.552 35.2684 137.264 34.5466 137.264 33.6688V17.185C137.264 16.4437 136.659 15.8488 135.918 15.8488ZM157.015 18.5993C154.996 16.6193 152.529 15.6244 149.632 15.6244C146.745 15.6244 144.297 16.6096 142.287 18.5798C140.278 20.5501 139.273 22.93 139.273 25.739C139.273 28.7139 140.258 31.1914 142.229 33.1616C144.199 35.1514 146.637 36.156 149.544 36.156C152.48 36.156 154.967 35.1806 156.986 33.2201C158.986 31.2499 160 28.8115 160 25.8951C160 23.008 159.005 20.5793 157.015 18.5993ZM153.836 30.4501C152.792 31.5815 151.387 32.1375 149.632 32.1375C147.886 32.1375 146.481 31.5718 145.418 30.4208C144.384 29.2894 143.858 27.7483 143.858 25.8171C143.858 24.0126 144.394 22.5301 145.457 21.3889C146.52 20.2477 147.905 19.6722 149.622 19.6722C151.358 19.6722 152.763 20.2477 153.826 21.3889C154.879 22.5203 155.406 24.0321 155.406 25.9146C155.416 27.8068 154.889 29.3089 153.836 30.4501Z"
        fill="#DE5959"
      />
      <path
        d="M113.777 29.6603C112.851 28.7239 112.334 27.4462 112.217 25.8563H125.082C125.667 25.8563 126.155 25.3881 126.165 24.8029C126.165 21.5939 125.335 19.0872 123.697 17.2828C122.029 15.4589 119.766 14.5518 116.908 14.5518C114.08 14.5518 111.807 15.4881 110.09 17.3608C108.383 19.2628 107.535 21.75 107.535 24.8224C107.535 27.9241 108.413 30.4113 110.168 32.284C111.397 33.591 112.899 34.4298 114.675 34.82C115.426 34.9956 116.196 35.0833 116.977 35.0736C120.176 35.1419 122.956 35.2101 126.145 35.2687V34.8005C125.755 34.3713 125.56 33.8641 125.56 33.2691C125.56 32.6839 125.765 32.1865 126.165 31.7573V31.1916C123.638 31.1331 117.532 31.0648 117.289 31.0648C115.874 31.0648 114.694 30.5966 113.777 29.6603ZM113.153 20.6868C113.436 20.2479 113.768 19.8773 114.158 19.5652C114.548 19.2531 114.987 19.0092 115.465 18.8434C115.943 18.6776 116.46 18.5898 117.006 18.5898C119.395 18.5898 120.907 19.7895 121.531 22.1792H112.509C112.665 21.6232 112.88 21.1258 113.153 20.6868Z"
        fill="#DE5959"
      />
    </svg>
  )
}

export default Gate
