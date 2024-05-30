import { useEffect, useState } from 'react';
import {ITEMS} from './constants';
import './App.css';

function App() {
  const [tabValue, setTabValue] = useState('all');
  const [list, setList] = useState(ITEMS);
  const [showThisMonthOnly, setshowThisMonthOnly] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    // console.log(tabValue);
    // if (tabValue === 'all') {
    //   setList(ITEMS);
    // } else {
    //   setList(ITEMS.filter((item) => item.communityCategoryCd === tabValue));
    // }
    filterItems();
  },[tabValue, showThisMonthOnly])

  const filterItems = () => {
    let filteredItems = ITEMS;

    if (tabValue!== 'all') {
      filteredItems = filteredItems.filter((item) => item.communityCategoryCd === tabValue);
    }

    if (showThisMonthOnly) {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth() + 1;

      filteredItems = filteredItems.filter((item) => {
        const regDate = item.regDttm.substring(0, 6);
        const regYear = parseInt(regDate.substring(0, 4));
        const regMonth = parseInt(regDate.substring(4, 6));

        return regYear === currentYear && regMonth === currentMonth;
      });
    }
    
    if (search !== ""){
      filterTitle(filteredItems)
      // filteredItems = filteredItems.filter((item) => item.title.replace(" ", "").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ", "")))
    }else{
      setList(filteredItems);
    }
      // setList(filteredItems);
    
  }

  const onClickTab = (selectedTab) => {
    // console.log(e.target.value);
    setTabValue(selectedTab);
  }

  const toggleShowThisMonthOnly = () => {
    setshowThisMonthOnly((prev) => !prev);
    // === setshowThisMonthOnly(!showThisMonthOnly);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // console.log(search);
  }

  const filterTitle = (items) => {
    // let filteredItems = items;
    // let filteredItems = ITEMS;
    
    if (search) {
      setList(items.filter((item) => {
        return (
          item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      }))
    } else {
      if (tabValue !== 'all') {
        setList(ITEMS.filter((item) => item.communityCategoryCd === tabValue));
      } else {
        setList(ITEMS);
      }
    }
  }

  return (
    <>
      <div>
        <div>
          <input type="text" value={search} onChange={handleSearch} />
          <button type="button" onClick={()=>{filterTitle(list)}}>검색</button>
        </div>
      </div>
      <div>
        <input id="month_chk" type="checkbox" onChange={toggleShowThisMonthOnly} />
        <label for="month_chk">이번 달</label>
      </div>
      <div>
        <div className="tab-list">
          <button className={tabValue === "all" ? "active" : ""} type="button" onClick={()=>onClickTab('all')}>전체</button>
          <button className={tabValue === "01" ? "active" : ""} type="button" onClick={()=>onClickTab('01')}>01</button>
          <button className={tabValue === "02" ? "active" : ""} type="button" onClick={()=>onClickTab('02')}>02</button>
          <button className={tabValue === "03" ? "active" : ""} type="button" onClick={()=>onClickTab('03')}>03</button>
        </div>
        <div>
          <ul>
            {list.map((item) => (
              <li key={item.communityContentSeq}>
                <div>title: {item.title}</div>
                <div>nickName: {item.nickName}</div>
                <div>communityCategoryCd: {item.communityCategoryCd}</div>
                <div>날짜: {item.regDttm}</div>
              </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;




// 0. 제공하려는 데이터 만들기
// 1. 제공된 데이터 title, nickName, communityCategoryCd 값 가져오기
// 2. 1에서 가져온 값 화면에 뿌려주기
// 3. tab 버튼 만들기 (전체, 01,02,03)
// 4. 각각의 tab 버튼 클릭 시, 해당 내용 보여주기 (이떄, tab 버튼이름과 communityCategoryCd 를 비교해서 같은것만 보여주기)
// 4-1. 선택한 버튼의 현재 상태의 값을 어딘가에 저장 useState
// 4-2. 현재 선택된 버튼과 communityCategoryCd 비교해서 tab 내용 뿌려주기
// 5. 체크박스(이번달) 버튼 추가
// 5-1. 현재 시간과 regDttm 값의 년도, 달을 비교해서 해당 달에 등록된 데이터만 필터링

// + 추가 내용
// 6. 검색 기능 추가 usestate
