import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AdminLayOut from "@/layout/admin";
import { Label } from "@mui/icons-material";
import { FormControlLabel, Grid, Stack, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import theme from "@/styles/theme/theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import RoundButton from "@/components/common/roundbutton/roundbutton";
import Link from "next/link";
import { createProfile } from "@/services/api/profile";
import {
  CreateUserModel,
  Gender,
  Role,
  UserModel,
} from "@/lib/interface/Iregister";
import CircularColor from "@/components/common/loading/buttonloading";
import { useRouter } from "next/router";
import { GoDotFill } from "react-icons/go";
import { useRegisterUser } from "@/hooks/mutation/registeruser";

const currencies = [
  {
    value: "admin",
    title: "Admin",
  },
  {
    value: "user",
    title: "User",
  },
  {
    value: "manager",
    title: "Manager",
  },
  {
    value: "employee",
    title: "Employee",
  },
];
const department = [
  {
    value: "Front-end dev",
  },
  {
    value: "UI/UX",
  },
  {
    value: "Data Analytics",
  },
  {
    value: "Back-End Dev",
  },
];

export default function RegistrationPage() {
  const [value, setValue] = React.useState<CreateUserModel>({
    fullName: "",
    email: "",
    department: "",
    phoneNumber: "",
    gender: Gender.Female,
    role: Role.User,
  });
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState<string[]>([]);
  const router = useRouter();
  const {
    mutate: registeruser,
    isLoading,
    error: mutationError,
  } = useRegisterUser({ onSuccess: () => {} });
  let error:  string[] = [];
  console.log({ registeruser });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setValue((val) => ({ ...val, [name]: value }));
    console.log(value);
  };

  const addUser = (event: React.FormEvent) => {
    event.preventDefault();
    //form validation

    console.log({ value });
    registeruser(value);

  };

  if (mutationError) {
    const y = mutationError as Error;
    error = y.message?.split("\n") ?? [y.message];
  }

  return (
    <AdminLayOut title={"Register New User"}>
      <Box sx={{ backgroundColor: "#FFFFFF" }}>
        <Grid
          container
          component="form"
          onSubmit={addUser}
          sx={{
            width: "100%",
            maxWidth: "700px",
            border: "0.5px solid #7C7B7B",
            px: "5em",
            background: "#FFFFFF",
            py: "3rem",
            boxShadow: "0.5px 0.5px 0px 0px #7C7B7B",
            // border:"solid red"s
          }}
        >
          {error?.length ? (
            <Grid>
              {error?.map((e) => (
                <Typography key={e} color="error" variant="body2">
                  {" "}
                  <GoDotFill color="inherit" /> {e}
                </Typography>
              ))}
            </Grid>
          ) : null}
          <Grid
            spacing={3}
            item
            md={12}
            xs={12}
            sx={{ pt: { md: "2rem", xs: "1rem" } }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.secondary.light }}
            >
              Enter Name
            </Typography>
            <TextField
              name="fullName"
              onChange={handleChange}
              fullWidth
              label="Enter Full Name"
              id="fullWidth"
              required
            />
          </Grid>
          <Grid
            spacing={3}
            item
            md={12}
            xs={12}
            sx={{ pt: { md: "2rem", xs: "1rem" } }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.secondary.light }}
            >
              Enter Email Address
            </Typography>
            <TextField
              onChange={handleChange}
              fullWidth
              name="email"
              label="Johndoe@gmail.com"
              id="fullWidth"
              required
            />
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              // pl:"2rem",
              pt: { md: "2rem", xs: "1rem" },
            }}
          >
            <Grid item md={6} xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.secondary.light }}
              >
                Phonee number
              </Typography>
              <TextField
                name="phoneNumber"
                onChange={handleChange}
                fullWidth
                label="Enter phonenumber"
                id="fullWidth"
                required
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography
                variant="subtitle2"
                sx={{ color: theme.palette.secondary.light }}
              >
                Role
              </Typography>
              <TextField
                fullWidth
                id="outlined-select-currency"
                name="role"
                onChange={handleChange}
                select
                label="Select"
                defaultValue="EUR"
                helperText=""
                required
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.title}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Grid
            item
            md={6}
            xs={12}
            sx={{
              pt: { md: "2rem", xs: "1rem" },
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.secondary.light }}
            >
              Department
            </Typography>
            <TextField
              fullWidth
              id="outlined-select-currency"
              name="department"
              select
              onChange={handleChange}
              label="Select"
              defaultValue="EUR"
              helperText=""
              required
            >
              {department.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>

            <Typography
              variant="subtitle2"
              sx={{ color: theme.palette.secondary.light }}
            >
              Gender
            </Typography>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="gender"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </Grid>
          <Grid item md={12} xs={12}>
            {/* <Link href="/thumbprint"> */}
            {isLoading ? (
              <CircularColor />
            ) : (
              <RoundButton
                variant="contained"
                type="submit"
                color="primary"
                sx={{
                  mt: "2rem",
                  width: "60%",
                  color: "#fff",
                  fontSize: "1.5rem",
                  mx: "8rem",
                }}
              >
                Continue
              </RoundButton>
            )}
            {/* </Link> */}
          </Grid>
        </Grid>
      </Box>
    </AdminLayOut>
  );
}
