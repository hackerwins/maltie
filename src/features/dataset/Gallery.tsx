import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectDataset, fetchDatasetAsync } from './datasetSlice';

export function Gallery() {
  const dataset = useAppSelector(selectDataset);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDatasetAsync(1));
  }, [dispatch]);

  return (
    <>
      <div className="flex w-full h-12">
        <div className="flex-1">
          <h1 className="text-2xl font-bold">All Images</h1>
        </div>
        <Link to="/import" type="button" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          &nbsp;Camera
        </Link>
      </div>
      <section>
        {
          dataset?.labels.map((label, idx) => 
            <div key={idx} className="container mx-auto">
              <div className="flex mt-4 bg-white">
                <span className="h-auto py-2 text-lg text-left">{`${label.name} ${label.images.length}`}</span>
              </div>
              <ul className="flex flex-wrap">
                {
                  label.images.map((image, index) => (
                    <li key={index} className="flex flex-wrap w-1/3">
                      <div className="relative w-full p-1 md:p-2">
                        <img alt="gallery" className="object-cover object-center w-full h-full rounded-lg" src={image} />
                        <div className="absolute bottom-3 left-3 h-6 rounded p-1 text-xs text-white backdrop-blur-sm bg-white/30">{label.name}</div>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
      </section>
    </>
  );
}
