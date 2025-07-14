use pinocchio::program_error::ProgramError;

/// Errors that may be returned by myproject.
#[derive(Clone, Debug, Eq, PartialEq, thiserror::Error)]
pub enum JitoVaultWhitelistError {
    #[error("Invalid")]
    Invalid,
}

impl From<JitoVaultWhitelistError> for ProgramError {
    fn from(e: JitoVaultWhitelistError) -> Self {
        ProgramError::Custom(e as u32)
    }
}
