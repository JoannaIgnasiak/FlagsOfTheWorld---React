import React from 'react';
import MainDisplay from '../../components/Display/MainDisplay';



const MainView = ({darkmode, data, error, inputNameSelect, inputRegionSelect, changeinputRegionSelectFn, changeinputNameSelectFn, clearfiltersFn}) => (
 <>

            <MainDisplay 
            darkmode={darkmode}
            data={data} 
            error={error}
            inputNameSelect={inputNameSelect}
            inputRegionSelect={inputRegionSelect}
            changeinputRegionSelectFn={changeinputRegionSelectFn}
            changeinputNameSelectFn={changeinputNameSelectFn}    
            clearfiltersFn={clearfiltersFn}      
            />            
  </>
);

export default MainView;