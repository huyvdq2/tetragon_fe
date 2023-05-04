import { DeleteRounded } from "@mui/icons-material";
import { ListItemIcon, ListItemText } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useDeletePodMutation } from "store/api.slice";

export default function ActionMenu({
  anchorEl,
  handleClose,
  open,
  target,
}: {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  target: {
    name: string;
    namespace: string;
  };
}) {
  const [deletePod] = useDeletePodMutation();

  const handleDeletePod = async () => {
    try {
      await deletePod({
        pod: target?.name,
        namespace: target?.namespace,
      }).unwrap();
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        sx: {
          boxShadow: (theme) => theme.shadows[3],
        },
      }}
    >
      <MenuItem onClick={handleDeletePod}>
        <ListItemIcon>
          <DeleteRounded fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ position: "relative", top: 1 }}>
          Delete
        </ListItemText>
      </MenuItem>
    </Menu>
  );
}
