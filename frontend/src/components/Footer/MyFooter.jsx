// 라이브러리
import { useRecoilState } from "recoil"

// 컴포넌트
import RoomBtn from "../Button/Room/RoomBtn"
import PostBox from "../Modal/Post/PostBox"
import ReceiveLetter from "../Modal/Post/ReceiveLetter"
import GuestBookModal from "../Modal/GuestBook/GuestBookModal"
import WriteGuestBookModal from "../Modal/GuestBook/WriteGuestBookModal"

// 스타일
import styles from "./Footer.module.css"

// 아톰
import {
  isPostBoxVisibleAtom,
  isReceiveLetterVisibleAtom,
} from "../../atom/PostAtom"
import { popUpStatusAtom } from "../../atom/RoomCustomTabAtom"
import { ItemsState, buildModeState } from "../Room/Atom"
import { isGuestBookVisibleAtom, isWriteGuestBookVisibleAtom }  from "../../atom/GuestBookAtom"


const MyFooter = () => {
  // url 경로
  const urlPath = import.meta.env.VITE_APP_ROUTER_URL

  // 리코일 상태관리
  const [editMode, setEditMode] = useRecoilState(buildModeState)
  const [items, setItems] = useRecoilState(ItemsState)
  const [isPostBoxVisible, setIsPostBoxVisible] =
    useRecoilState(isPostBoxVisibleAtom)
  const [isReceiveLetterVisible, setIsReceiveLetterVisible] = useRecoilState(
    isReceiveLetterVisibleAtom
  )
  const [popUpStatus, setPopUpStatus] = useRecoilState(popUpStatusAtom)
  const [isGuestBookVisible, setIsGuestBookVisible] = useRecoilState(isGuestBookVisibleAtom)
  const [isWriteGuestBookVisible, setIsWriteGuestBookVisible] = useRecoilState(isWriteGuestBookVisibleAtom)

  const handleSelectButtonClick = () => {
    // console.log(1)
  }
  const roomEditClickEvent = () => {
    setItems(items)
    setPopUpStatus(!popUpStatus)
    setEditMode(true)
  }
  const goSingleMap = () => {
    window.location.replace(`${urlPath}/`)
  }
  
  // 방명록 작성 모달 종료함수
  const closeWriteGuestBookModalHandler = () => {
    setIsWriteGuestBookVisible(false)
    setIsGuestBookVisible(true)
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.secondFooter}>
          <div className={styles.background}>
            <RoomBtn img={"roomEdit"} onClick={() => roomEditClickEvent()} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.background}>
            <RoomBtn
              img={"worldMap"}
              onClick={() => {
                goSingleMap()
              }}
            />
          </div>

          {/* 편지함선택버튼 */}
          {/* <div className={style.background}>
            <RoomBtn img={"postBox"} onClick={() => setIsPostBoxVisible(true)} />
          </div> */}

          {/* 방명록 */}
          <div className={styles.background}>
            <RoomBtn img={"postBox"} onClick={() => setIsGuestBookVisible(true)} />
          </div>
        </div>

        {isPostBoxVisible && (
          <PostBox
            cancelClick={() => setIsPostBoxVisible(false)}
            onSelectButtonClick={handleSelectButtonClick}
          />
        )}

        {isReceiveLetterVisible && (
          <ReceiveLetter cancelClick={() => setIsReceiveLetterVisible(false)} />
        )}
      </div>

      {/* 방명록 리스트 모달 */}
      {isGuestBookVisible && (
          <>
            <div className={styles.Overlay} onClick={() => setIsGuestBookVisible(false)} />
            <div className={styles.GuestBookContainer}>
              <GuestBookModal />
            </div>
          </>
        )}

        {/* 방명록 작성 모달 */}
        {isWriteGuestBookVisible && (
          <>
            <div className={styles.Overlay} onClick={() => closeWriteGuestBookModalHandler()} />
            <div className={styles.GuestBookContainer}>
              <WriteGuestBookModal />
            </div>
          </>
        )}
    </>
  )
}

export default MyFooter
