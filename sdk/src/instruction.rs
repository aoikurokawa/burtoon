use shank::ShankInstruction;

/// Instructions for myproject. This is currently not used in the
/// program business logic, but we include it for IDL generation.
#[repr(C)]
#[derive(Clone, Debug, PartialEq, ShankInstruction)]
pub enum JitoVaultWhitelistInstruction {
    Initialize,
}
