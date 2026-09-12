import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { sliceActions } from "../../Store/sliceOne";
import { useDispatch, useSelector } from "react-redux";
import classes from "./MyWorkPage.module.css";
import AddIcon from "@mui/icons-material/Add";
import InfoCard from "../DRYComponents/InfoCard";
import ModalDialog from "../DRYComponents/ModalDialog";

//Helper component
const SectionButton = (props) => {
  //CLICK FUNCTION
  const click_fnction = () => {
    let propToPass = props.btnAbout === "tech" ? props.btnAbout : "non_tech";
    props.clickFn(propToPass);
  };

  return (
    <>
      <button className={classes.wrkSectionBtn} onClick={click_fnction}>
        {props.btnTitle}{" "}
        <span className={props.icon_class}>
          {" "}
          <AddIcon />
        </span>
      </button>
    </>
  );
};

const MyWorkPage = () => {
  //1. Managing state.
  const activeSelection = useSelector(
    (state) => state.sliceOne.activeSelection,
  );
  const cardObj_technical = useSelector(
    (state) => state.sliceOne.cardObject_technical,
  );
  const viewedProject = useSelector((state) => state.sliceOne.viewedProject);
  const modalState = useSelector((state) => state.sliceOne.modalDialog_Open);

  const dispatch = useDispatch();

  //2. Toggling state.
  const toggleSelection = (selection) => {
    dispatch(sliceActions.toggleSelection(selection));
  };

  const toggle_ModalDialog = (obj) => {
    console.log(obj);
    dispatch(sliceActions.toggle_ModalDialog(obj));
  };

  //3. Manging helper state.
  const isTechOpen = activeSelection === "tech";
  const isNonTechOpen = activeSelection === "non_tech";

  //4. Toggling component classes.
  const iconClassFlip = (isExpanded) => {
    return `${classes.plus_icn} ${isExpanded ? classes.iconflip : ""}`;
  };
  console.log(viewedProject, modalState);
  return (
    <>
      <div className={classes.parentContainer}>
        {!isNonTechOpen && (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${classes.gridItem} ${isTechOpen ? classes.fullWidth : classes.halfWidth}`}
          >
            <SectionButton
              icon_class={iconClassFlip(isTechOpen)}
              clickFn={toggleSelection}
              btnAbout="tech"
              btnTitle="Technological"
            />

            {isTechOpen && (
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={classes.cardsParentContainer}
              >
                {cardObj_technical.map((el, i) => (
                  <InfoCard
                    cardTitle={el.name}
                    cardDescription={el.description}
                    imgSrc={el.imgsrc}
                    key={String(el.name).charAt(1) + i}
                    link={el.link}
                    clickFn={toggle_ModalDialog}
                  />
                ))}
                <ModalDialog
                  open={modalState}
                  onClose={toggle_ModalDialog}
                  dialogInfo={viewedProject}
                />
              </motion.div>
            )}
          </motion.div>
        )}

        {!activeSelection && <Box className={classes.midLine}></Box>}

        {!isTechOpen && (
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`${classes.gridItem} ${isNonTechOpen ? classes.fullWidth : classes.halfWidth}`}
          >
            <SectionButton
              icon_class={iconClassFlip(isNonTechOpen)}
              clickFn={toggleSelection}
              btnAbout="non_tech"
              btnTitle="Non-technological"
            />
          </motion.div>
        )}
      </div>
    </>
  );
};

export default MyWorkPage;
