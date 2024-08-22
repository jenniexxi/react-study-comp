# 1. TodoList

1. ToDo List만들기

- 요구사항
  1. 추가
     - Todo List를 하단 list영역에 노출
  2. 삭제
     - 선택한 TodoList 삭제
  3. 수정
     - 선택한 TodoList 수정
  4. 검색
     - List 에 있는 내용중 검색어가 포함된
  5. 완료
     - 선택한 TodoList에 완료 상태 표시

2. 기타사항
   1. Chat GPT로 포괄적인 질문 금지
      - 사용시 어떤부분에 어떻게 질문했는지 남겨두기
   2. 차주 서버연결시 날자 선택도 가능하게 할예정(dayjs 사용)

---

## 2. 기능 detail

### 1. 추가 - addTodo

#### 1. 입력값 받기 / 추가 버튼 클릭 -> 목록에 리스트 추가

- 입력값 받기 : useState<br>
  (useState : 컴포넌트 내에서 상태를 관리하는 데 사용)
- 입력 필드의 값 : 입력 필드의 값이 변경될 때마다(입력할 떄마다) 핸들러 호출 onChange
- 리스트 만들기 : useState
- 추가되는 목록에 id 값 주기 : counter++ 이용해서 추가, useRef<br>
  useRef 사용 이유 : status에 의해 render가 일어날 때 변수로서의 역할에서 값이 변하지 않게 해주는 역할을 함 (render 할 때 저장해 놓은 값이 초기화가 안돼고 그대로 남아 있는 것)
- 목록에 리스트 추가 : 추가할 때는 추가된 값을 그대로 불러오고, 새로 추가한 값을 넣어주기
- 추가하는 입력값 부분 초기화

### 2. 삭제 - handleDelete

#### 1. 선택한 할일을 알아내기 / 해당 할일을 목록에서 제거

- 선택한 할일을 알아내려면 해당 할일(li)의 id 값을 알아야함 (id 값 넘겨주기)
- 삭제하려는 할일(li) 의 id !== lists.id 는 현재 순회 중인 할 일 객체의 id 비교해서 return
- filter : true/false 를 꼭 return 해야함, true (결과값 포함) / false (결과값 안 포함)<br>
  return 해주는 값은 true/false 의 형태를 해주어야 하기 때문에 그 값이 true가 되면 그대로 결과값에 넣음
- filter 된 리스트를 업데이트 (setLists)
- 찾아본 내용 : 제거할 때 해당 목록 (li) 에 key 값을 넣어줘야 하는데 이 부분에 대해서 찾아봄

### 3. 수정 - handleUpdate

#### 1. 수정하려는 목록(li) 알아내기

- map 을 사용하여 lists 상태 배열을 변환
- 배열의 각 요소(lists)를 순회하면서, 해당 요소의 id 가 전달된 id 와 일치하는지 확인<br>
  해당 조건이 참이면, content 업데이트
- map 을 사용한 이유 : map은 배열의 모든 요소를 변환하면서 특정 조건을 만족하는 요소만 수정할 수 있기 떄문에 적합 (할 일 목록의 길이를 그대로 유지하면서, 특정 요소만 업데이트 할 수 있음)
- map : 항상 각 요소를 반환해야 하므로, 조건문이 끝난 후 해당 lists 객체를 그대로 반환 (일치하지 않는 경우, 아무 변경 없이 원래의 lists 반환)
- 기존 내용 그대로 가져와서 보여주기<br>
  : id 와 content를 변수로 받아오는데, 이때 input 값을 넣어주면 기존 값을 그대로 보여줌

#### 2. 수정 - 수정 완료 모드 전환

- 내용은 span 태그에 담겨 있는데 input 태그로 변경<br>
  : isActive 조건에 따라 input 과 span 변환
- 수정 버튼 클릭 -> 버튼을 '완료' 텍스트로 수정<br>
  : isActive 에 따라 텍스트 변경

- [filter vs map]<br>
  -filter : 조건을 만족하는 요소들만 반환하며, 원본 배열보다 짧거나 같은 길이의 배열을 생성 / 특정 조건에 맞는 요소들만 걸러내고 싶을 때 사용(완료되지 않은 할 일을 피렅링 하는 작업) /
  배열로만 반환할 수 있음<br>
  -map : 각 요소를 처리한 결과를 반환하며, 원본 배열과 같은 길이의 새로운 배열을 생성 / 배열의 모든 요소에 대해 어떤 변화를 적용하고, 그 결과로 배열을 만들고자 할 때 사용 / 받고자 하는 형식으로 반환할 수 있음 (number, array ...)

### 4. 완료 (할 일 완료)

#### 1. 체크박스 checked 여부에 따라 스타일 적용

- isChecked 로 컨트롤

### 5. 검색

#### 1. 검색 입력 필드로부터 입력값 받기

- searchInput, setSearchInput

#### 2. 검색된 리스트 목록 상태 관리

- searchLists, setSearchLists

#### 3. 검색어를 포함하는 할 일 찾기

- filter 사용하여 목록을 순회하면서 해당하는 내용만 filter
- 배열에서 포함하는 내용을 찾을 때 includes 사용
- 검색된 리스트 목록에 저장 setSearchLists(result)

#### 4. 입력할 때마다 검색 기능 필요

- 입력값을 쓸 때마다 검색 기능이 이루어져야 하기 떄문에 useEffect를 사용

#### 5. 입력값이 없을 때 원래 목록 보여주기

- 입력값의 유무는 length 조건을 이용해서 작성

---

---

---

[기능 용어 정리]
? (옵셔널 체이닝)<br>
// 객체의 속성에 접근할 때, 속성이나 객체가 null 또는 undefined 일 경우 에러를 발생시키지 않고 undefined를 반환하도록한다.

---

---

---

## 3. dayjs

### 1. <(prev), >(next) 버튼 클릭했을 때 날짜를 변경해주는 값이 필요

- 날짜 관리는 useState

### 2. 가운데 날짜 보여주는 텍스트 클릭했을 때 캘린더 노출하고 선택한 날짜로 변경

- 캘린더에서 날짜 선택하면 텍스트 변경
- 선택한 텍스트 관리
- 캘린터 토글 팝업 띄우기

## 4. API - API 생성, 연결, CRUD

### 1. Create

##### 1. create 작업 위해 api 작성

##### 2. 추가되는 함수에 api 연결하기 try-catch (try-then 등)

### 2. Update

##### 1. Update 작업 위해 api 작성

##### 2. 추가되는 함수에 api 연결하기 try-catch (try-then 등)

### 3. Read

##### 1. Read 작업 위해 api 작성

##### 2. 추가되는 함수에 api 연결하기 try-catch (try-then 등)

### 4. Delete

##### 1. Delete 작업 위해 api 작성

##### 2. 추가되는 함수에 api 연결하기 try-catch (try-then 등)

### 5. 완료 - crud 이외 기능

##### 1. 기존 : todoItem 에 isChecked 로 되어 있음 => 변경 : TodosList 안에 completed 로 바꿔야함

- 기존 isChecked 를 삭제, completed 로 교체 (TodoItem 에서 isChecked 들어간 부분 수정)
- setIsChecked 를 completedUpdate 로 바꿈
- api 새로 만들지 않고, 기존 update api 가져다 씀 (update api - put todos)  
  
  
  
  
## 5. tanstack query (react query) - useQuery, useMutation
### 1. useQuery
- API 관리 관리해주는 hook (use 로 시작하면 보통 hook)
- useEffect 를 사용해서 주로 씀
- CRUD 중 “R”에만 사용 / get, post 상관없이 사용
- 공식 문서 : https://tanstack.com/query/latest/docs/framework/react/overview
- 캐싱, 에러, 성공, 로딩 등 (data, isLoading, isSuccess ...) 관리에 용이
- 사용법 : querykey("getTodo", selectedDate, isSearch, input)


### 2. useMutation
- CRUD 중 “CUD”에만 사용 (어떤 액션을 통해서 데이터 변경 작업이 있을 때 주로 사용)
- onSuccess, onError, mutation ...